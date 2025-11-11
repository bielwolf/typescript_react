import Logo from '../Logo'
import HeaderAction from './components/HeaderAction'
import HeaderFormFilters from './components/HeaderFormFilters'
import HeaderLinks from './components/HeaderLinks'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src='/logo.png' />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderAction />
        </HeaderListItem>
      </HeaderList>
    </header>
  )
}

export default Header