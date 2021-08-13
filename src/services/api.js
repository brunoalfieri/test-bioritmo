import { Middleware } from "@/plugins/axios"

export default {
  getPlaces () {
    return new Middleware()
      .method('GET')
      .append('https://test-frontend-developer.s3.amazonaws.com/data/locations.json', 'external')
      .build()
  }
}