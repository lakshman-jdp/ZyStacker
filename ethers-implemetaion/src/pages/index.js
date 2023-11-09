import Head from 'next/head'
import { useEffect, useState } from 'react'
import cnt from '../comps/cnt'


export default function Home() {
  const [base, setBase] = useState(null)
  const [user, setUser] = useState("")
  const [data, setData] = useState(null)
  const onUserChange = ({target:T}) => setUser(T.value)

  useEffect(() => {
    const callV = async () => {
      setBase(await cnt.base())
    }
    callV()
  }, [])


  const actOne = async name => setData(await cnt.actOne(name, user))
  const actTwo = async (name, status) => setData(await cnt.actTwo(name, user, status))

  return (
    <>
      <Head>
        <title>Mint Pass Interality</title>
        <meta name="description" content="Designed by Interality.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-100 mx-auto px-4">
        <div className="w-100 mx-auto py-5 d-flex flex-column justify-content-center align-items-center">
          <p className="h1">Name: {base?.name} - {`(${base?.symbol})`}</p>
          <p className="h5">Owner: {base?.owner}</p>
          <p className="h5">Contract: 0x3F9279ae2912f4760192D37E558b5F401972D1EB</p>          
          <p className="h5">Open Pass: {base?.openPass ? "Yes":"No"}</p>
          <p className="h5">Total Supply: {base?.totalSupply}</p>
          <a href={base?.tokenURI} target="_blank" className="h5">Token URI: {base?.tokenURI}</a>
        </div>
        <div className="w-100 mx-auto py-5 d-flex justify-content-center align-items-center flex-wrap">
          <div className="w-100 mx-auto py-1 d-flex justify-content-center align-items-center ">
            <input style={{maxWidth:"450px"}}
              value={user} id="_user"
              onChange={onUserChange}
              type="text" 
              className="form-control" 
              placeholder="Enter Wallet" />
          </div>
            <Btn text="Mint" onClick={() => actOne("mint")} />
            <Btn text="Is Verified" onClick={() => actOne("isVerified")} />              
            <Btn text="Is Whitelisted" onClick={() => actOne("isWhitelisted")} />              
            <Btn text="Get Info" onClick={() => actOne("getInfo")} />              
            <Btn text="Set Whitelist" onClick={() => actTwo("setWhitelist", true)} />              
            <Btn text="Set Access" onClick={() => actTwo(setAccess, true)} />              
            <Btn text="Remove Access" onClick={() => actTwo(setAccess, false)} />    
            <Btn text="Owner Of (Token Id)" onClick={() => actOne("ownerOf")} />
            <Btn text="Token URI (Token Id)" onClick={() => actOne("tokenURI")} />                      
        </div>
        <div className="w-100 mx-auto py-5 d-flex flex-column justify-content-center align-items-center">
          <pre>Data: {JSON.stringify(data, undefined, 2)}</pre>
        </div>
      </main>
    </>
  )
}

const Btn = ({onClick, text}) => <button onClick={onClick} className="btn btn-outline-primary m-1">{text}</button>
