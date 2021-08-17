import { Middleware } from "@/plugins/axios"

export default {
  getPlaces() {
    return new Middleware()
      .method('GET')
      .append(process.env.VUE_APP_API_PLACES, 'external')
      .build()
  }
}