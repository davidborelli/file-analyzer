import { Upload } from '@/domain/entities/Upload'
import { UploadStatus } from '@/domain/enums/UploadStatus'

describe('Upload', () => {
  it('Deve criar uma instância de Upload com todos atributos', () => {
    const upload = new Upload('validId', 'filename', UploadStatus.PENDING)

    expect(upload.getId()).toBe('validId')
    expect(upload.getFileName()).toBe('filename')
    expect(upload.getStatus()).toBe(UploadStatus.PENDING)
  })

  it('Deve lançar erro caso não seja informado id na criação de Upload', () => {
    expect(() => new Upload('', 'filename', UploadStatus.PENDING)).toThrow(
      'É necessário informar o ID'
    )
  })

  it('Deve lançar erro caso não seja informado filename na criação de Upload', () => {
    expect(() => new Upload('validId', '', UploadStatus.PENDING)).toThrow(
      'É necessário informar um filename'
    )
  })

  it('Deve criar uma instância de Upload com status PENDING caso não seja informado na criação', () => {
    const upload = new Upload('validId', 'filename')
    expect(upload.getStatus()).toBe(UploadStatus.PENDING)
  })

  it('Deve criar uma instância de Upload com status conforme passado por parâmetro na criação', () => {
    const upload = new Upload('validId', 'filename', UploadStatus.SUCCESS)
    expect(upload.getStatus()).toBe(UploadStatus.SUCCESS)
  })
})
