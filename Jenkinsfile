pipeline {
  agent any
  stages {
    stage('Build da imagem') {
      steps {
        sh 'docker build -t leoroberto/demonode:latest .'
      }
    }

    stage('Parar imagem antiga') {
      steps {
        sh 'docker stop node'
      }
    }

    stage('Remover imagem antiga') {
      steps {
        sh 'docker rm node'
      }
    }

    stage('Executar imagem') {
      steps {
        sh 'docker run -d -p 80:8080 --name "node" leoroberto/demonode:latest'
      }
    }

  }
}