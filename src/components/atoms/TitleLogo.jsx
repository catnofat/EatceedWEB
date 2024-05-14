import styled from 'styled-components'

const LogoContainer = styled.div`
  margin-left: ${props => props.lrmargin || '10px'};
  font-size: ${props => props.size};
  color: ${props => props.color || 'black'};
  cursor: pointer;
  @media (min-width: 500px) {
    font-size: 4rem;
  }
`
const TitleLogo = ({ lrmargin, color, size, onClick }) => {
  return (
    <LogoContainer
      lrmargin={lrmargin}
      color={color}
      size={size}
      onClick={onClick}>
      <div style={{ display: 'inline', fontFamily: 'PretendardBold' }}>EAT</div>
      <div style={{ display: 'inline', fontFamily: 'Pretendard' }}>ceed</div>
    </LogoContainer>
  )
}

export default TitleLogo
