/// <reference types="Cypress" />
///const faker = require ('faker')
import { faker } from "@faker-js/faker";

describe('Central de Atendimento ao Cliente TAT', function() {
    ///Para visitar a url a cada caso de teste
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    // Declaração de variaveis
    var varName = faker.internet.displayName()
    var varLastName = faker.internet.displayName()
    var varEmail = faker.internet.email()
    var varText = faker.commerce.productDescription()
    const varLongText = "Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA Teste de QA "
    const varTempo = 3000
    const varLongText2 = Cypress._.repeat ('Teste de QA ', 200)

    ///Verificar título da aplicação na tela
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    ///Verificar se todos os campos previstos estão visiveis para o usuário
    it('validar visibilidade de todos os campos da tela', function(){
        cy.contains('CAC TAT').should('be.visible')
        cy.contains('Forneça o máximo de informações, por favor.').should('be.visible')
        cy.contains('Nome').should('be.visible')
        cy.contains('Sobrenome').should('be.visible')
        cy.contains('E-mail').should('be.visible')
        cy.contains('Telefone').should('be.visible')
        cy.contains('Produto').should('be.visible')
        cy.contains('Tipo de atendimento').should('be.visible')
        cy.contains('Ajuda').should('be.visible')
        cy.contains('Elogio').should('be.visible')
        cy.contains('Feedback').should('be.visible')
        cy.contains('Qual seu meio de contato preferencial?').should('be.visible')
        cy.contains('Como podemos te ajudar?').should('be.visible')
        cy.contains('Adicione um anexo').should('be.visible')
        cy.contains('Política de Privacidade').should('be.visible')
    })
    ///Envio de formulário
    it('Preenche os campos obrigatórios e envia o formulário', function(){
        cy.clock()
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
        cy.tick(varTempo)
        cy.get('.success').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nenhum campo preenchido
    it('Valida campos obrigatórios, sem preenchimento de nenhum campo', function(){
        cy.clock()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, apenas nome preenchido
    it('valida campos obrigatórios, apenas nome', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome e sobrenome preenchido
    it('valida campos obrigatórios, apenas nome e sobrenome', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido
    it('valida campos obrigatórios, apenas nome, sobrenome e email', function(){
        cy.clock()
        cy.get('button[type="submit"]').click()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 1
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 1', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 2
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 2', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 3
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 3', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@email')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 4
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 4', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@email.')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Verificar obrigatoriedade dos campos, nome, sobrenome e email preenchido porém invalido 5
    it('valida campos obrigatórios, apenas nome, sobrenome e email, porém email inválido 5', function(){
        cy.clock()
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type('email@email,email')
        cy.get('#open-text-area').type(varText)
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
        cy.tick(varTempo)
        cy.contains('.error', 'Valide os campos obrigatórios!').should('not.be.visible')
    })
    ///Validar textos longos no campo de assunto
    it('Validar textos bem longos no campo de descrição da ajuda', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#open-text-area').type(varLongText, { delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Validar se campo telefone é apenas numerico
    it('Validar se campo destinado ao telefone aceita somente números, não aceita letras', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone').type('tel39fone').should('have.value', '')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
     ///Validar se campo telefone é apenas numerico, não aceita especiais
     it('Validar se campo destinado ao telefone aceita somente números, não aceira numeros ou  especiais', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone').type('47|@p965894444').should('have.value', '47965894444')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Validar se campo telefone é numerico
    it('Validar se campo destinado ao telefone aceita números', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Forçar campo de telefone como obrigatorio e enviar formulario com sucesso
    it('Forçar campo de telefone como obrigatorio e enviar formulario com sucesso', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Forçar campo de telefone como obrigatorio e enviar formulario com erro
    it('Forçar campo de telefone como obrigatorio e não preencher o campo de telefone', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
    })
    ///Validarpreencher e limpar capos obrigatórios
    it('Validarpreencher e limpar capos obrigatórios', function(){
        cy.get('#firstName')
            .type(varName)
            .should('have.value', varName)
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type(varLastName)
            .should('have.value', varLastName)
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type(varEmail)
            .should('have.value', varEmail)
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('4796584444')
            .should('have.value', '4796584444')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
            .type(varText, { delay: 0})
            .should('have.value', varText)
            .clear()
            .should('have.value', '')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.contains('.error', 'Valide os campos obrigatórios!').should('be.visible')
    })
    ///Selecionar produto youtube
    it('Selecionar produto youtube e verificar se foi selcionado corretamente', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Selecionar produto mentoria
        it('Selecionar produto mentoria e verificar se foi selcionado corretamente', function(){
            cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
            cy.get('#phone-checkbox').check()
            cy.get('#phone').type('4796584444').should('have.value', '4796584444')
            cy.get('#product')
                .select('mentoria')
                .should('have.value', 'mentoria')
            cy.get('button[type="submit"]').click()
            cy.get('.success').should('be.visible')
            cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
        })
    ///Selecionar produto blog
        it('Selecionar produto blog e verificar se foi selcionado corretamente', function(){
            cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
            cy.get('#phone-checkbox').check()
            cy.get('#phone').type('4796584444').should('have.value', '4796584444')
            cy.get('#product')
                .select(1)
                .should('have.value', 'blog')
            cy.get('button[type="submit"]').click()
            cy.get('.success').should('be.visible')
            cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
        })
    ///Selecionar tipo de atendimento
    it('Selecionar tipo de atendimento atraves de radiobox', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="radio"][value="elogio"]')
            .check()
            .should('have.value', 'elogio')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Selecionar tipo de atendimento, marca cada tipo de atendimento
    it('Selecionar tipo de atendimento atraves de radiobox, marca cada tipo de atendimento', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
                })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Selecionar tipo de atendimento,mais de um checkbox
    it('Selecionar tipo de atendimento,mais de um checkbox', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
     ///Selecionar tipo de atendimento, mais de um checkbox, desmarcando o ultimo após
     it('Selecionar tipo de atendimento, mais de um checkbox, desmarcando o ultimo após', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#phone-checkbox').check()
        cy.get('#phone').type('4796584444').should('have.value', '4796584444')
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///Selecionararquivos de pastas fixtures
    it('Selecionar arquivos de pastas fixtures', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="checkbox"]')
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input) {
            console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
            })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    // Seleciona um arquivo simulando um drag-and-drop (arrastar o arquivo para upar)
    it('Seleciona um arquivo simulando um drag-and-drop (arrastar o arquivo para upar)', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="checkbox"]')
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })       
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
        // Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias
    it('Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias)', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#product')
            .select('youtube')
            .should('have.value', 'youtube')
        cy.get('input[type="checkbox"]')
        cy.fixture('example.json').as('samplefile')
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('@samplefile', { action: 'drag-drop' })
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })       
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    //Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique
    it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
        cy.campos_obrigatorios(varName, varLastName, varEmail, varText)
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    //Acessa a página da política de privacidade removendo o target e então clicando no link
    it('Acessa a página da política de privacidade removendo o target e então clicando no link', function(){
        cy.get('#privacy a')
             .invoke('removeAttr', 'target')
             .click()
        cy.contains('CAC TAT - Política de privacidade').should('be.visible')
    })
    //Testando funcionalidade invoke para mostrar itens ocultos e para ocultar itens
    it('Exibe e esconde as mensagens de sucesso e erro usando o .invoke', function() {
        cy.get('.success')
        //mostra que a msg de sucesso nao esta visivel na tela
          .should('not.be.visible')
        //força a msg de sucesso visivel na tela  
          .invoke('show')
        //mostra que a msg de sucesso esta visivel na tela  
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
        //esconde a msg de sucesso  
          .invoke('hide')
        //mostra que a msg de sucesso nao esta visivel na tela
          .should('not.be.visible')
        cy.get('.error')
           .should('not.be.visible')
           .invoke('show')
           .should('be.visible')
           .and('contain', 'Valide os campos obrigatórios!')
           .invoke('hide')
           .should('not.be.visible')
    })
    ///Validar textos longos no campo de assunto
    it('Validar textos bem longos no campo de descrição da ajuda', function(){
        cy.get('#firstName').type(varName)
        cy.get('#lastName').type(varLastName)
        cy.get('#email').type(varEmail)
        cy.get('#open-text-area')
            .invoke('val', varLongText2)
            .should('have.value', varLongText2)
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
        cy.contains('.success', 'Mensagem enviada com sucesso').should('be.visible')
    })
    ///faz uma requisição HTTP
    it('Faz uma requisição HTTP', function(){
        cy.request('http://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        //Lendo a pagina na web e verificando algumas requests
            .should(function(response){
                const {status, statusText, body} = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
                expect(body).to.include('CAC TAT')
            })          
    })
    // Desafio encontre o gato
    it('Encontre o gato', function(){
        cy.get('#cat')
        .invoke('show')
        .should('be.visible')         
    })
  })