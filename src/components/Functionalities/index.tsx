import React from 'react'
import transaction from '../../assets/transaction.gif'
import category from '../../assets/category.gif'
import budget from '../../assets/budget.gif'
import { Container, Functionality } from './styles'
import { IconContext } from 'react-icons'
import { HiOutlineTag } from 'react-icons/hi'
import { HiOutlineArrowsUpDown, HiOutlineBanknotes } from 'react-icons/hi2'

const Functionalities: React.FC = () => {
  return (
    <Container>
      <div>
        <h4>CONHEÇA NOSSAS</h4>
        <h2>Funcionalidades</h2>
      </div>
      <Functionality>
        <img
          src={transaction}
          alt="Transaction system gif example."
        />
        <div>
          <div>
            <IconContext.Provider
              value={{ size: '24px', className: 'global-class-name' }}>
              <HiOutlineArrowsUpDown />
            </IconContext.Provider>
          </div>
          <h3>Registro de transações</h3>
          <p>
            A aplicação gira em torno das transações cadastradas pelo usuário.
            Registre suas transações escolhendo entre dois tipos: ganhos e
            despesas. Além isso, as transações são segmentadas em categorias
            dinâmicas ao seu tipo. As possibilidades são muitas!
          </p>
        </div>
      </Functionality>
      <Functionality>
        <div>
          <div>
            <IconContext.Provider
              value={{ size: '24px', className: 'global-class-name' }}>
              <HiOutlineTag />
            </IconContext.Provider>
          </div>
          <h3>Categorias personalizadas</h3>
          <p>
            A Parsi disponibiliza categorias padrões de ganhos e despesas para
            cada usuário cadastrado, mas também permite que você crie suas
            próprias categorias, aumentando a personalização das suas transações
            e servindo crucialmente para os orçamentos de despesas.
          </p>
        </div>
        <img
          src={category}
          alt="Transaction system gif example."
        />
      </Functionality>
      <Functionality>
        <img
          src={budget}
          alt="Transaction system gif example."
        />
        <div>
          <div>
            <IconContext.Provider
              value={{ size: '24px', className: 'global-class-name' }}>
              <HiOutlineBanknotes />
            </IconContext.Provider>
          </div>
          <h3>Orçamentos mensais</h3>
          <p>
            Crie orçamentos mensais e defina o máximo que deseja gastar em
            alguma despesa. Os orçamentos funcionam calculando quanto já foi
            gasto no mês atual e comparando com o limite que você define,
            retornando a situação do orçamento.
          </p>
        </div>
      </Functionality>
    </Container>
  )
}

export default Functionalities
