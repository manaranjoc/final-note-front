@ignore
Feature: stateful mock back
# java -jar karate.jar -m my-mock.feature -m my-2nd-mock.feature -p 8080

  Background:
  * configure cors = true
  * def notas = [{nota: 5, porcentaje: 0.2}, {nota:5, porcentaje:0.1}]

  Scenario: pathMatches('/api/v1/notas') && methodIs('get')
    * def response = $notas.*
