import { upload_file } from '../../upload'

export default defineEventHandler(async (event) => {
    const file = await readMultipartFormData(event)
    const response = await upload_file(file?.[0].data, file?.[0].filename!)
    return response
})