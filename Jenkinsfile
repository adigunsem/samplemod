pipeline {
  tools {
    nodejs 'Node 8.1.4'
  }

  agent any

  stages {
    stage('build') {
      steps {
        echo "branch: ${env.BRANCH_NAME}"
        sh '''
          pwd
          ls -l
          which node
          which npm
          node --version
          npm --version
        '''
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

    stage('deploy: prod') {
      steps {
        sh '''
          export NPM_TOKEN="${NPM_TOKEN}"
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
