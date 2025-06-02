import { Controller, Get } from '@nestjs/common'

@Controller('location')
export class LocationController {
  @Get()
  getLocation() {
    return 'Hello World !! location'
  }
}
