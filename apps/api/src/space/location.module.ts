import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LocationController } from './controllers/location.controller'
import { Category } from './entities/category.entity'
import { LocationService } from './services/location.service'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
