import * as React from 'react';
//import { Fragment } from 'react'; //https://javascriptplayground.com/react-fragments/
import { RouteComponentProps } from 'react-router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface State {
    fullName: string,
    email: string,
    message: string
}

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class ContactForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        
        this.state = {
            fullName: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        fetch('api/Contact/SendEmail', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        });

        console.log(this.state);
    };


    public render() {
        return <div>
            <h2>Contact form:</h2>
            <p>Here you can send me an email if you have any questions:</p>

            {/*<form>

                <label htmlFor='fullname'>Full Name</label>
                <input type='text' id='fullname' name='fullname' placeholder='Your full name...' />

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' placeholder='Your email...' />

                <label htmlFor='subject'>Subject</label>
                <textarea id='subject' name='subject' placeholder='Your message...'></textarea>

                <button type='submit' value='Submit'></button>

            </form>*/}

            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for='fullName'>Full name: </Label>
                    <Input
                        type='text'
                        name='fullName'
                        id='fullName'
                        placeholder='Full name...'
                        value={this.state.fullName}
                        onChange={(e) => this.setState({ fullName: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email: </Label>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email...'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}/>
                </FormGroup>
                <FormGroup>
                    <Label for='message'>Message: </Label>
                    <Input
                        type='textarea'
                        name='message'
                        id='message'
                        placeholder='Message...'
                        value={this.state.message}
                        onChange={(e) => this.setState({ message: e.target.value })}/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>;
    }
}
