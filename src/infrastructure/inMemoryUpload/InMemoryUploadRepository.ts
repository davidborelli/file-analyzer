import { Upload } from '@/domain/entities/Upload'
import { UploadRepository } from '@/domain/repository/Upload.repository'

export class InMemoryUploadRepository implements UploadRepository {
  private uploads: Upload[] = []

  async save(upload: Upload): Promise<void> {
    this.uploads.push(upload)
  }

  async findById(uploadId: string): Promise<Upload | null> {
    return this.uploads.find((it) => it.getId() === uploadId) || null
  }
}
