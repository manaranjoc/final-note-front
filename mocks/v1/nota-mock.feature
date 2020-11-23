@ignore
Feature: stateful mock back
# java -jar karate.jar -m mocks\v1\nota-mock.feature -p 8080
#* def responseHeaders = { 'Access-Control-Request-Headers': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'Allow': '*'}

  Background:
  * configure cors = true
  * def curId = 2
  * def nextId = function(){ return ~~curId++ }
  * def notas = [{nota: 5, porcentaje: 0.2}, {nota:5, porcentaje:0.1}]

  Scenario: methodIs('options')
    *  def response = ''

  Scenario: pathMatches('/api/v1/notas') && methodIs('get')
    * def response = $notas.*
  
  Scenario: pathMatches('/api/v1/notas') && methodIs('post')
    * def nota = request
    * def id = nextId()
    * notas.add(nota)
    * def responseHeaders = {'location': ('/api/v1/notas'+id)}
    * def response = 200

  Scenario: pathMatches('/api/v1/notas/average') && methodIs('get')
    * def response = 5
