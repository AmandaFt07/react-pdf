import Link from 'next/link'
import HeaderStyle from '../../../styles/header'

export default function Header() {
    return(
        <HeaderStyle>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/Components/Relatorio1'>Relatório 1</Link>
              </li>
              <li>
                <Link href='/Components/Relatorio2'>Relatório 2</Link>
              </li>
            </ul>
          </nav>
        </HeaderStyle>
    )
}