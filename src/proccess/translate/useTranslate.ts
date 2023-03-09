import React from 'react'
import { $Object, deepEqual, Guards, Path, PathValue } from 'shulga-app-core'
import { errorhandler } from './error-handler'
import { useLang } from './provider'
import { Entity, Lang, Translate, TranslateFn, TranslateGuards } from './types'

const createPath = (entity: Entity, lang: Lang) => `./${entity}/${lang}.json`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const asyncLoadModule = async (entity: Entity, lang: Lang, pending: () => void) => {
  pending()
  return await import(`${createPath(entity, lang)}`)
}

const syncLoadModule = (entity: Entity, lang: Lang, pending: () => void) => {
  pending()
  return new Promise<any>((resolve, reject) => {
    try {
      const result = require(`${createPath(entity, lang)}`)
      resolve(result)
    } 
    catch (err) {
      reject(err)
    }
  })
}

/**
 * разбиваем джсоны переводов на чанки чтоб уменьшить размер загружаемого бандла
 * @param entity глобальные сущности в приложении
 * @param lang текущий язык
 * @returns функция перевода
 */
// TODO: оверкилл ли гард на загружаемый модуль ??? норм для дебага перевести только на proccess.env = dev

export const useTranslate = <E extends keyof Translate>(
  entity: E
): { translate: TranslateFn<E>; isPending: boolean } => {
  const { lang } = useLang()

  const entityRef = React.useRef<E>(entity)
  const langRef = React.useRef<Lang>(lang)
  const [isPending, setIsPending] = React.useState(false)

  if (langRef.current !== lang) {
    langRef.current = lang
  }

  if (entityRef.current !== entity) {
    entityRef.current = entity
  }

  const [tObject, setTObject] = React.useState<Translate[E]>({} as Translate[E])

  React.useEffect(() => {
    syncLoadModule(entityRef.current, langRef.current, () => setIsPending(true))
      .then((next) => {
        if (process.env.NODE_ENV === 'development') {
          TranslateGuards[entityRef.current].validate(next)
        }

        if (Guards.isObject(next)) {
          next = { ...next }

          setTObject((prev) => (!deepEqual(prev, next) ? next : prev))
        }
      })
      .catch((err) => {
        errorhandler(err, entityRef.current, langRef.current)
        setTObject({} as Translate[E])
      })
      .finally(() => {
        setIsPending(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityRef.current, langRef.current])

  const translate = React.useCallback(
    <P extends Path<Translate[E]>>(path: P, placeholder = ''): PathValue<Translate[E], P> => {
      if (Guards.isObject(tObject)) {
        return $Object(tObject).get(path) || (placeholder as any)
      }
      return placeholder as any
    },
    [tObject]
  )

  return { translate, isPending }
}
