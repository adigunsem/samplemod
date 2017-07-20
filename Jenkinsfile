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
      agent any
      steps {
        sh 'npm test'
      }
    }

    stage('publish npm package') {
      agent master
      when {
        branch 'master'
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
