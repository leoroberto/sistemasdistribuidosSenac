pipeline {
  agent any
  stages {
    stage('Build da Imagem') {
      steps {
        def app = docker.build("leoroberto/demonode:latest")
      }
    }

    stage('Executar imagem') {
      steps {
        app.run()
      }
    }

  }
}