import Imagekit from 'imagekit'

const { imagekit } = useRuntimeConfig()

const img = new Imagekit({
    privateKey: imagekit.privateKey,
    publicKey: imagekit.publicKey,
    urlEndpoint: imagekit.urlEndpoint
})

export const upload_file = async (file: any, fileName: string) => new Promise((resolve, reject) => img
    .upload({ file, fileName, folder: 'stamatologiya' })
    .then((data) => resolve(data))
    .catch(err => reject(err))
) 