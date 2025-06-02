import { LocationController } from './controllers/location.controller'
import { Module } from '@nestjs/common'
import { LocationService } from './services/location.service'

@Module({
  imports: [],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
