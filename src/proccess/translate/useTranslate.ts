import React from 'react'
import { $Object, Guards, Path, PathValue } from 'shulga-app-core'
import { Entity, Lang, Translate, TranslateGuards, UseTranslateResult } from './types'

const createPath = (entity: Entity, lang: Lang) => `./${entity}/${lang}.json`

const loadModule = async (entity: Entity, lang: Lang) => {
    const path = createPath(entity, lang)
    return await import(`${path}`)
}

export const useTranslate = (entity: Entity, lang: Lang): UseTranslateResult[Entity] => {
    const entityRef = React.useRef<Entity>(entity)
    const langRef = React.useRef<Lang>(lang)

    if(langRef.current !== lang) {
        langRef.current = lang
    }

    if(entityRef.current !== entity) {
        entityRef.current = entity
    }

    const [tObject, setTObject] = React.useState<Translate[Entity]>()

    React.useEffect(() => {
        const guard = TranslateGuards[entityRef.current]

        loadModule(entityRef.current, langRef.current).then((json) => {
            const guardResult = guard.validate(json)

            if(guardResult.success === false && process.env.NODE_ENV === 'development') {
                console.log(
                    '>>>', `[${entity}]`, `[${lang}]`, '<<<', 
                    `\n${JSON.stringify(guardResult, null ,2 )}`, 
                    `\n<<<`
                )
            }
            
            setTObject(() => json)
        }).catch((err) => {
            setTObject(() => undefined)
        })
        return () => {
            setTObject(() => undefined)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [langRef.current, entityRef.current])

    const t = React.useCallback((key: Path<Translate[Entity]>, placeholder = ''): PathValue<Translate[Entity], typeof key> => {
        if(Guards.isObject(tObject)) {
            const value = $Object(tObject).get(key)

            return value ? value : placeholder
        }
        return placeholder
    }, [tObject])

    return t
}