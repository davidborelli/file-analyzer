import { Upload } from '@/domain/entities/Upload'

export interface UploadRepository {
  save(upload: Upload): Promise<void>
  findById(uploadId: string): Promise<Upload | null>
}
