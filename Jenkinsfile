pipeline {

  agent {
    label 'int'
  }

  tools {
    nodejs '6.9.1'
  }

  stages {
    stage('build') {
      steps {
        echo "branch: ${env.BRANCH_NAME}"
        sh '''
          figlet info
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
      when {
        branch 'master'
      }
      steps {
        sh "npm publish"
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
