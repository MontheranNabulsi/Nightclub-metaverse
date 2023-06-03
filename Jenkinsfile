pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
        steps {
            bat 'npm install --prefix ./server install ./server/'
            bat 'npm install --prefix ./client install ./client/'
        }
        }

        stage('Test') {
        steps {
            echo 'Testing API\'s...'
            bat 'npm --prefix ./server  test'
        }
        }
        
    }
}