pipeline {
  tools {
    nodejs 'Node 8.1.4'
  }

  agent none

  stages {
    stage('build') {
      agent any
      steps {
        echo "branch: ${env.BRANCH_NAME}"
        sh 'npm install'
      }
    }

    stage('test') {
      agent any
      steps {
        sh 'npm test'
      }
    }

    stage('publish approval') {
      agent none
      when {
        branch 'master'
      }
      steps {
        script {
          env.PUBLISH_NPM_PACKAGE = input message: 'User input required ?',
            parameters: [choice(name: 'Publish NPM Package', choices: 'no\nyes', description: 'Choose "yes" if you want to publish this build')]
        }
      }
    }

    stage('publish npm package') {
      agent any
      when {
        environment name: 'PUBLISH_NPM_PACKAGE', value: 'yes'
      }
      steps {
        sh '''
          export NPM_TOKEN="${NPM_TOKEN}"
          npm config set '//registry.npmjs.org/:_authToken' '${NPM_TOKEN}'
          npm publish
           '''
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
