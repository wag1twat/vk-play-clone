import React from 'react'
import { $Object, Guards, Path, PathValue } from 'shulga-app-core'
import { Entity, Lang, Translate, TranslateFn, TranslateGuards } from './types'

const createPath = (entity: Entity, lang: Lang) => `./${entity}/${lang}.json`

const loadModule = (entity: Entity, lang: Lang) => require(`${createPath(entity, lang)}`)

/**
 * разбиваем джсоны переводов на чанки чтоб уменьшить размер загружаемого бандла
 * @param entity глобальные сущности в приложении
 * @param lang текущий язык
 * @returns функция перевода
 */
// TODO: оверкилл ли гард на загружаемый модуль ??? норм для дебага перевести только на proccess.env = dev

export const useTranslate = <E extends keyof Translate>(entity: E, lang: Lang): TranslateFn<E> => {
  const entityRef = React.useRef<E>(entity)
  const langRef = React.useRef<Lang>(lang)

  if (langRef.current !== lang) {
    langRef.current = lang
  }

  if (entityRef.current !== entity) {
    entityRef.current = entity
  }

  const tObject = React.useMemo<Translate[E]>(
    () => loadModule(entityRef.current, langRef.current),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entityRef.current, langRef.current]
  )

  React.useEffect(() => {
    const guard = TranslateGuards[entityRef.current]

    const result = guard.validate(tObject)

    if (result.success === false && process.env.NODE_ENV === 'development') {
      console.log(
        '>>>',
        `[${entityRef.current}]`,
        `[${langRef.current}]`,
        '<<<',
        `\n${JSON.stringify(result, null, 2)}`,
        `\n<<<`
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityRef.current, langRef.current, tObject])

  const t = React.useCallback(
    <P extends Path<Translate[E]>>(path: P, placeholder = ''): PathValue<Translate[E], P> => {
      if (Guards.isObject(tObject)) {
        return $Object(tObject).get(path) || (placeholder as any)
      }
      return placeholder as any
    },
    [tObject]
  )

  return t
}
