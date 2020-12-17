import CellDetection from "./CellDetection/CellDetection"
import JerseyRESTEcommerce from './JerseyRESTEcommerce/JerseyRESTEcommerce'
import AllTheRest from './AllTheRest/AllTheRest'
import MediaServer from './MediaServer/MediaServer'
import TwitchIRCBot from './TwitchIRCBot/TwitchIRCBot'
import TakeOff from './TakeOff/TakeOff'

const projects = [
  CellDetection,
  JerseyRESTEcommerce,
  TakeOff,
  MediaServer,
  AllTheRest,
  TwitchIRCBot,
]

const template = () => ({
  title: "",
  date: "",
  tags: [],
  brief: [
  ],
  outcomes: [
  ]
})

export default projects