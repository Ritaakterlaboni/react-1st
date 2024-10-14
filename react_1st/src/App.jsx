import Container from "./componants/Container"
import Image from "./componants/Image"
import Logo from "../src/assets/logo.png"
import Button from './componants/Button'






function App() {


  return (
    <>
   
    <div className={'navbar pt-[25px] bg-background'} >
      <Container>
        <div className={'display flex'}>
        <div className={'logopart  w-[20%] pt-[15px]'} >
              <Image src={Logo} />
          </div>
          <div className={'w-65% m-auto'} >
            <ul className={' flex'} >
              <li className={'text-fsize font-semibold pr-[20px]'} >Men</li>
              <li className={'text-fsize font-semibold pl-[20px] pr-[20px]'}>Woman</li>
              <li className={'text-fsize font-semibold pl-[20px] pr-[20px]'}>Kids</li>
              <li className={'text-fsize font-semibold pl-[20px] pr-[20px]'}>Collection</li>
              <li className={'text-fsize font-semibold pl-[20px] pr-[20px]'}>Trends</li>


            </ul>
          </div>

          <div className={'w-25% '}>
            <Button className={' pt-[14px] pb-[14px] pl-[30px] pr-[30px] mr-[15px] rounded-xl text-fsize border border-backbg'} btnName={'Login'}/>
            <Button  className={' pt-[14px] pb-[14px] pl-[20px] pr-[20px] bg-backbg rounded-xl text-fsize '} btnName={' Sign up'}/>

          </div>
        </div>
      </Container>
    </div>
   

   
    </>
  )
}

export default App
