import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
  }
}
