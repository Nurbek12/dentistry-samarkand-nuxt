import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __d = path.dirname(fileURLToPath(import.meta.url))

async function copySqliteFile() {
    try {
        fs.copyFile(
            path.join(__d, 'dev.db'),
            path.join(__d, '../', '.output', 'server', 'node_modules', '.prisma', 'client', 'dev.db'), (err) => {
            if(err) return console.log('Error with copy file', err)
            console.log('db copied successfully!');
        })
    } catch (error) {
        console.log(error)
    }
}

copySqliteFile()