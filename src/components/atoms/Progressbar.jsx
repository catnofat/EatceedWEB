import styled from 'styled-components'

const Bardiv = styled.div`
  height: 8px;
  margin-bottom: 0.7rem;
  margin-top: 0.3rem;
  width: 100%;
  paddingn: 1.2rem 0;
`

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #fff;
  border: 0.1rem solid #ff7700;
  border-radius: 1rem;
`

const Fill = styled.div`
  position: relative;
  background: #ff7700;
  height: 8px;
  border-radius: 10rem;
  width: ${props => props.percent}%;
`

const Progressbar = ({ percent }) => {
  return (
    <Bardiv>
      <Track>
        <Fill percent={percent}></Fill>
      </Track>
    </Bardiv>
  )
}

export default Progressbar
