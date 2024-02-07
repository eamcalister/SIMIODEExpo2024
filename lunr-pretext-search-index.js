var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  This book was created with Pretext.   copyright  "
},
{
  "id": "stocks_flows",
  "level": "1",
  "url": "stocks_flows.html",
  "type": "Section",
  "number": "1.1",
  "title": "Stocks and Flows",
  "body": " Stocks and Flows  Stock-flow models have the following components:  Stocks: Stocks are things that accumulate. In the context of modeling with ODEs, these are the dependent variables of the system. Within Insightmaker you can assign units to stocks or leave them dimensionless. When units are assigned, this must be tracked throughout the entire model construction.  Flows: Flows into a stock contribute positively to the time-derivative of the corresponding state variable. Likewise, outflows contribute negatively. Insightmaker allows one to choose to only allow positive flow rates for a given flow, or positive and negative rates. The downstream direction of a flow is indicated by a filled arrowhead and upstream is indicated by an unfilled arrowhead (as in the figure below). Note: A flow need not have a stock upstream or downstream; this is necessary when accumulation or depletion is comes from or goes to outside the model.   The arrowhead with an empty hole points upstream. Flow in that direction indicates negative from from the downstream stock.   Variables: Variables are often used as parameters in the context of ODEs. Insightmaker can attach sliders to them so that we can modify them and see the changes to the dynamics. We will also see that variables are useful for creating objective functions in optimization problems.  Links: Links are arrows between stocks, flows, and variables that allow the linked objects to be used in the formulas for the object that the to which the link points.  Briefly, the key formula to manage a stock-flow model is the following:    The arrowhead with an empty hole points upstream. Flow in that direction indicates negative flow from from the downstream stock.     "
},
{
  "id": "stocks_flows-2",
  "level": "2",
  "url": "stocks_flows.html#stocks_flows-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stocks: Flows: Variables: Links: "
},
{
  "id": "stocks_flows-3",
  "level": "2",
  "url": "stocks_flows.html#stocks_flows-3",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " The arrowhead with an empty hole points upstream. Flow in that direction indicates negative flow from from the downstream stock.    "
},
{
  "id": "first_order_examples",
  "level": "1",
  "url": "first_order_examples.html",
  "type": "Section",
  "number": "1.2",
  "title": "Basic Examples",
  "body": " Basic Examples  The fundamental building block for all Insights is the integrator:   The Basic Integrator (click the ''full screen Insight'' button in the upper right to open this in a new window on Insightmaker).    In this example one can modify the flow rate function and initial condition of the stock to obtain the antiderivaive of the given flow function with the given initial condition.  A key fact is that we can use any stock that is up- or downstream of a given flow in the formula for its flow rate. Moreover, we may link parameters, which may be manipulated with sliders, and run simulations numerically. For instance, we have the standard Malthusian growth model given below.   Malthusian growth model with variable growth rate.    "
},
{
  "id": "integrator-insight",
  "level": "2",
  "url": "first_order_examples.html#integrator-insight",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " The Basic Integrator (click the ''full screen Insight'' button in the upper right to open this in a new window on Insightmaker).   "
},
{
  "id": "Malthusian-insight",
  "level": "2",
  "url": "first_order_examples.html#Malthusian-insight",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Malthusian growth model with variable growth rate.   "
},
{
  "id": "Hill-Keller",
  "level": "1",
  "url": "Hill-Keller.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Hill-Keller Sprint Model",
  "body": " The Hill-Keller Sprint Model  In this section we review the Hill-Keller Sprint modeel, with estimation of the parameter , to illustrate the basic workflow of ODE modeling from Section 1.1 of . To proceed, open the Inisght in its own window and click ``Start Story''.   The Hill-Keller sprint model, with parameter estimation from the 2008 Olympic 100m dash.    "
},
{
  "id": "Hill-Keller-figure",
  "level": "2",
  "url": "Hill-Keller.html#Hill-Keller-figure",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " The Hill-Keller sprint model, with parameter estimation from the 2008 Olympic 100m dash.   "
},
{
  "id": "Oscillators",
  "level": "1",
  "url": "Oscillators.html",
  "type": "Section",
  "number": "2.2",
  "title": "Oscillators",
  "body": " Oscillators  By the time students get to second-order equations, the process of turning second-order equations into systems of first-order equations is intuitive. General systems beyond those from second-order equations just require one more link in the diagram. Furthermore, Insightmaker supports the ability to switch between the two-dimensional phase portrait and time series graphs.   The basic forced harmonic oscillator.    "
},
{
  "id": "Oscillators-figure",
  "level": "2",
  "url": "Oscillators.html#Oscillators-figure",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " The basic forced harmonic oscillator.   "
},
{
  "id": "DrugDosage",
  "level": "1",
  "url": "DrugDosage.html",
  "type": "Section",
  "number": "2.3",
  "title": "Drug Dosage",
  "body": " Drug Dosage  This Insight is motivated by section 5.1 of . We use it to introduce the idea of dicontinuous inflows\/forcing functions. Making the repeat specification in the Pulse function nonzero allows students to complete the modeling scenario   Drug Dosage    "
},
{
  "id": "dosage-insight",
  "level": "2",
  "url": "DrugDosage.html#dosage-insight",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Drug Dosage   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Kurt Bryan, Differential Equations: A Toolbox for Modeling the World SIMIODE.org, 2021.  Bryan Winkel, 7-010-MultipleDoses-ModelingScenario  , doi:\/10.25334\/CCW1-E736, 2022.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
