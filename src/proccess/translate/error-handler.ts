import { ValidationError } from 'runtypes'
import { Entity, Lang } from './types'

export const errorhandler = <E extends unknown>(error: E, entity: Entity, lang: Lang) => {
  if (process.env.NODE_ENV === 'development') {
    if (error instanceof ValidationError) {
      console.error('>>>', `[${entity}]`, `[${lang}]`, '<<<', `\n${error.stack}`, `\n<<<`)
    } else if (error instanceof Error) {
      console.error('>>>', `[${entity}]`, `[${lang}]`, '<<<', `\n${error.stack}`, `\n<<<`)
    }
  }
}
