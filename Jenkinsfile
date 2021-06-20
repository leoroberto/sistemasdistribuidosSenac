pipeline {
  agent any
  stages {
    stage('Build da Imagem') {
      steps {
        sh 'docker build -t leoroberto/demonode:latest .'
      }
    }

    stage('Executar imagem') {
      steps {
        sh 'docker run -p 80:8080 leoroberto/demonode:latest'
      }
    }

  }
}