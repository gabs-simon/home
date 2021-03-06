import Head from 'next/head'
import Window from '../components/terminal/TerminalWindow'

export default function Home() {
  return (<>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 w-full h-screen flex flex-col py-8 px-6">
      <div className="grow h-full">
        <Window />
      </div>
    </div>
  </>)
}
