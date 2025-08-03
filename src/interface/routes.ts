import express from 'express'
import { randomUUID } from 'crypto'

import { Upload } from '@/domain/entities/Upload'
import { UploadStatus } from '@/domain/enums/UploadStatus'

import { UploadServices } from '@/application/Upload.services'

import { InMemoryUploadRepository } from '@/infrastructure/inMemoryUpload/InMemoryUploadRepository'

const router = express.Router()

const uploadRepository = new InMemoryUploadRepository()
const uploadService = new UploadServices(uploadRepository)

router.post('/uploads', async (req, res) => {
  const { filename } = req.body

  try {
    if (!filename.trim()) {
      return res.status(400).send({ message: 'filename is required!' })
    }

    const upload = new Upload(randomUUID(), filename, UploadStatus.PENDING)
    await uploadService.save(upload)
    return res.status(201).json(upload)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
})

router.get('/uploads/:id', async (req, res) => {
  const { id } = req.params

  try {
    const upload = await uploadService.findById(id)
    if (!upload) {
      return res.status(404).send({ message: 'Upload not found!' })
    }

    return res.json(upload)
  } catch (error: any) {
    return res.status(500).send({ error: error.message })
  }
})

export default router
