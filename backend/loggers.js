let Winston = require('winston')

let {NODE_ENV} = process.env

if (NODE_ENV == 'production') {
  var httpLogger = new Winston.Logger({
    transports: [
      new Winston.transports.Console({
        level: 'info',
        stderrLevels: [],
        formatter: (options) => {

          let date = new Date()
          let level = process.stdout.isTTY ? Winston.config.colorize(options.level,
            options.level.toUpperCase()) : options.message
          let message = options.message ? options.message : ''
          let meta = options.meta && Object.keys(options.meta).length ?
            '\t' + JSON.stringify(options.meta) : ''
          return `[${date}] httpLogger ${level} ${message}`
        },
      }),
      new Winston.transports.File({
        json: true,
        level: 'debug',
        filename: 'logs/http.log',
        maxsize: 1024 * 100,
        tailable: true,
        maxFiles: 3,
        formatter: (options) => {
          let date = new Date()
          let level = process.stdout.isTTY ? Winston.config.colorize(options.level,
            options.level.toUpperCase()) : options.message
          let message = options.message ? options.message : ''
          let meta = options.meta && Object.keys(options.meta).length ?
            '\t' + JSON.stringify(options.meta) : ''
          return `[${date}] ${level} ${message}\n${meta}`
        },
      })
    ]
  })

  var stderrLogger = new Winston.Logger({
    transports: [
      new Winston.transports.Console({
        level: 'warn',
        stderrLevels: ['silly', 'debug', 'verbose', 'info', 'warn', 'error'],
        colorize: process.stderr.isTTY ? true : false,
        formatter: (options) => {
          let date = new Date()
          let message = process.stderr.isTTY ?
            Winston.config.colorize(options.level, options.message) : options.message
          let errorMessage = options.meta.message
          return `[${date}] ${message} ${errorMessage}`
        },
      }),
      new Winston.transports.File({
        json: true,
        level: 'warn',
        filename: 'logs/errors.log',
        maxsize: 1024 * 100,
        tailable: true,
        maxFiles: 3,
      }),
      /*
      new Winston.transports.Mail({
        json: true,
        level: 'error',
        from: MAIL_ROBOT,
        to: MAIL_SUPPORT,
        subjects: 'Application failed!',
        host: SMTP_HOST,
        port: SMTP_PORT,
        username: SMTP_USERNAME,
        password: SMTP_PASSWORD,
        secure: SMTP_SECURE == 'yes' ? true : false
      })
      */
    ]
  })

} else {
  var httpLogger = new Winston.Logger({
    transports: [
      new Winston.transports.Console({
        level: 'info',
        stderrLevels: [],
        formatter: (options) => {

          let date = new Date()
          let level = process.stdout.isTTY ? Winston.config.colorize(options.level,
            options.level.toUpperCase()) : options.message
          let message = options.message ? options.message : ''
          let meta = options.meta && Object.keys(options.meta).length ?
            '\t' + JSON.stringify(options.meta) : ''
          return `[${date}] httpLogger ${level} ${message}`
        },
      }),
      new Winston.transports.File({
        json: false,
        level: 'debug',
        filename: 'logs/http.log',
        maxsize: 1024 * 100,
        tailable: true,
        maxFiles: 3,
        formatter: (options) => {
          let date = new Date()
          let level = process.stdout.isTTY ? Winston.config.colorize(options.level,
            options.level.toUpperCase()) : options.message
          let message = options.message ? options.message : ''
          let meta = options.meta && Object.keys(options.meta).length ?
            '\t' + JSON.stringify(options.meta) : ''
          return `[${date}] ${level} ${message}`
        },
      })
    ]

  })

  var stderrLogger = new Winston.Logger({
    transports: [
      new Winston.transports.Console({
        level: 'warn',
        stderrLevels: ['silly', 'debug', 'verbose', 'info', 'warn', 'error'],
        colorize: process.stderr.isTTY ? true : false,
        formatter: (options) => {
          let date = new Date()
          let message = process.stderr.isTTY ?
            Winston.config.colorize(options.level, options.message) : options.message
          let errorMessage = options.meta.message
          return `[${date}] ${message} ${errorMessage}`
        },
      }),
      new Winston.transports.File({
        json: false,
        level: 'warn',
        filename: 'logs/errors.log',
        maxsize: 1024 * 100,
        tailable: true,
        maxFiles: 3,
        formatter: (options) => {
          let date = new Date()
          let message = options.message ? options.message : ''
          let stack = options.meta.stack
          return `[${date}] ${message}\n${stack}`
        },
      })
    ]
  })
}

exports.httpLogger = httpLogger
exports.stderrLogger = stderrLogger
