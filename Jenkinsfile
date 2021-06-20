pipeline {
  def app
  agent any
  stages {
    stage('Build da Imagem') {
      steps {
        app = docker.build("leoroberto/demonode:latest")
      }
    }

    stage('Executar imagem') {
      steps {
        app.run()
      }
    }

  }
}