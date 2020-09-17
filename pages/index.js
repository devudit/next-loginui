// File - /pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/Layout";
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Home() {
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin">
                    <img className="mb-4" alt="" width="72" height="72" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="useremail@domain.com" className="mr-sm-2" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                        <FormControl type="password" className="mr-sm-2" />
                    </FormGroup>
                    <Button className="btn-lg btn-block" variant="primary">Sign In</Button>
                </Form>
            </div>
        </Layout>
      </>
  )
}
