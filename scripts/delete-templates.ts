import AWS from 'aws-sdk'
import { readdir, readFile } from 'fs/promises'

AWS.config.update({ region: 'ap-south-1' })
const ses = new AWS.SES({ apiVersion: '2010-12-01' })

const deploy = async() => {
	const userTypes = await readdir('./src/generated/templates')
	for(const userType of userTypes) {
		const files = await readdir(`./src/generated/templates/${userType}`)

		for(const file of files) {
			const [name, ext] = file.split('.')
			if(ext === 'json') {
				const fileData = await readFile(
					`./src/generated/templates/${userType}/${file}`,
					'utf8'
				)
				const config = JSON.parse(fileData)
				try {
					const result = await ses.deleteTemplate({ TemplateName: config.Template.TemplateName }).promise()
					await new Promise(resolve => setTimeout(resolve, 1000))
					console.log(file, result)
				} catch(err) {
					console.log(
						config.Template.TemplateName,
						': Could not delete template'
					)
				}
			}
		}
	}
}

deploy()
