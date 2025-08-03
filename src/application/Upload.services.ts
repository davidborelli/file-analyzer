import { Upload } from '@/domain/entities/Upload'
import { UploadRepository } from '@/domain/repository/Upload.repository'

export class UploadServices {
  constructor(private uploadRepo: UploadRepository) {}

  async save(upload: Upload): Promise<void> {
    return await this.uploadRepo.save(upload)
  }

  async findById(uploadId: string): Promise<Upload | null> {
    return this.uploadRepo.findById(uploadId)
  }
}
