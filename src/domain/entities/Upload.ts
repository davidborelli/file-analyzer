import { UploadStatus } from '@/domain/enums/UploadStatus'

export class Upload {
  constructor(
    private id: string,
    private filename: string,
    private status?: UploadStatus
  ) {
    if (!id) throw new Error('É necessário informar o ID')
    if (!filename) throw new Error('É necessário informar um filename')

    if (!status) this.status = UploadStatus.PENDING
  }

  getId() {
    return this.id
  }

  getFileName() {
    return this.filename
  }

  getStatus() {
    return this.status
  }
}
