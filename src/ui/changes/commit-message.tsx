import * as React from 'react'

interface CommitMessageProps {
  onCreateCommit: (title: string) => void
}

interface CommitMessageState {
  title: string
}

export class CommitMessage extends React.Component<CommitMessageProps, CommitMessageState> {

  public constructor(props: CommitMessageProps) {
    super(props)

    this.state = {
      title: ''
    }
  }

  /** TODO: commit description field */
  /** TODO: disable submit when no files selected */

  private handleTitleChange(event: any) {
    this.setState({title: event.target.value})
  }

  private handleSubmit(event: any) {
    this.props.onCreateCommit(this.state.title)
    this.setState({title: ''})
    event.preventDefault()
  }

  public render() {
    return (
      <div id='commit-message'>
        <form className='commit-form media' onSubmit={event => event.stopPropagation()}>
          <img className='commit-form-avatar media-figure'
            src='https://avatars0.githubusercontent.com/u/1174461?v=3&s=30'
            alt='avatar' />

          <div className='media-body'>
            <input type='text'
                   className='full-width'
                   placeholder='Commit Title...'
                   value={this.state.title}
                   onChange={event => this.handleTitleChange(event) } />
            <input type='submit' className='btn' value='Commit changes' onClick={event => this.handleSubmit(event)} />
          </div>
        </form>
      </div>
    )
  }
}
