import Axios from 'axios'

const KEY = "AIzaSyAMdxiVfdYF9Y0xSvyIu6IYCiwb7FZr7LA";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      key:KEY
    }
})