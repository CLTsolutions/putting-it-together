import React from 'react'
import { BalanceView } from './BalanceView'
import { TransactionForm } from './TransactionForm'
import { TransactionHistory } from './TransactionHistory' 

// React.Component<Props, State>
export class Checking extends React.Component {
  render() {
    return (
      <>
        <section>
          <BalanceView />
          <TransactionForm />
        </section>
        <section>
          <TransactionHistory />
        </section>
      </>
    )
  }
}
