import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column({ type: 'varchar', length: 255 })
  color: string
}
