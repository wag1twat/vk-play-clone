import React from 'react'
import { $Object, Guards, Path, PathValue } from 'shulga-app-core'
import { Entity, Lang, Translate, TranslateFn, TranslateGuards } from './types'

const createPath = (entity: Entity, lang: Lang) => `./${entity}/${lang}.json`

const loadModule = async (entity: Entity, lang: Lang) => {
  const path = createPath(entity, lang)
  return await import(`${path}`)
}

/**
 * разбиваем джсоны переводов на чанки чтоб уменьшить размер загружаемого бандла
 * @param entity глобальные сущности в приложении
 * @param lang текущий язык
 * @returns функция перевода
 */
// TODO: оверкилл ли гард на загружаемый модуль ??? норм для дебага перевести только на proccess.env = dev
// TODO: че делать с миганием текста на замене placeholder при перезагрузке страницы, мб skeleton / react.suspense
// TODO: возвращать ли isModuleLoading ???

export const useTranslate = <E extends keyof Translate>(entity: E, lang: Lang): TranslateFn<E> => {
  const entityRef = React.useRef<E>(entity)
  const langRef = React.useRef<Lang>(lang)

  if (langRef.current !== lang) {
    langRef.current = lang
  }

  if (entityRef.current !== entity) {
    entityRef.current = entity
  }

  const [tObject, setTObject] = React.useState<Translate[E]>()

  React.useEffect(() => {
    const guard = TranslateGuards[entityRef.current]

    loadModule(entityRef.current, langRef.current)
      .then((json) => {
        const guardResult = guard.validate(json)

        if (guardResult.success === false && process.env.NODE_ENV === 'development') {
          console.log(
            '>>>',
            `[${entity}]`,
            `[${lang}]`,
            '<<<',
            `\n${JSON.stringify(guardResult, null, 2)}`,
            `\n<<<`
          )
        }

        setTObject(() => json)
      })
      .catch((err) => {
        setTObject(() => undefined)
      })
    return () => {
      setTObject(() => undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langRef.current, entityRef.current])


  const t = React.useCallback(
    <P extends Path<Translate[E]>>(path: P, placeholder = ''): PathValue<Translate[E], P> => {
       if(Guards.isObject(tObject)) {
         return $Object(tObject).get(path) || (placeholder as any)
       }
       return placeholder as any
    },
    [tObject]
  )

  return t
}
