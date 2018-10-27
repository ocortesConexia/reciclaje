import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdinariosPage } from '../ordinarios/ordinarios';
import { PapelCartonPage } from '../papel-carton/papel-carton';
import { PlSticoPage } from '../pl-stico/pl-stico';

@Component({
  selector: 'page-informaci-n',
  templateUrl: 'informaci-n.html'
})
export class InformaciNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  recicleItems=[
    {name:"Ordinarios",
     img:"assets/img/ordinarios.png",
     info:`Los residuos ordinarios, usualmente son dispuestos en rellenos sanitarios, debido a que su composición no permite su reuso o reciclaje.


     Es necesario advertir que por lo general, los residuos ordinarios son dispuestos junto con los aprovechables y hasta peligrosos, por desconocimiento o falta de voluntad en la separación en la fuente de generación. Esto es causal de pérdida de aprovechamiento de residuos como plásticos, cartón y vidrio; así como también de la contaminación de suelos.

     En todo caso, es de resaltar que los residuos ordinarios son precisamente los que se desea reducir al máximo, puesto que su generación no denota más que un impacto negativo. La reducción se realiza por medio de educación sobre los materiales y la optimización de elementos desde la misma compra.

     En los procesos productivos, por medio de mejoras en la optimización de las materias primas y un adecuado estudio de tipo de residuos, se puede llegar a una reducción de la tasa de aseo, gracias a la disminución de residuos en el aforo de ordinarios, por su adecuada separación.

     Hay errores tanto en la concepción de lo que son estos residuos, como en la forma en que los gestionamos, hoy nos enfocaremos en uno de esos y las recomendaciones para su manejo.`,
     items:"Papel sucio o engrasado, papel carbón, envolturas de mecato, residuos de barrido, icopor, colillas, servilletas, pañales (sucio), papel higiénico (sucio), bolsas de carne, pollo o pescado."
    },
    {name:"Papel Carton",
     img:"assets/img/papelcarton.png",
     info:`El reciclaje de papel es el proceso de recuperación de papel ya utilizado creado para transformarlo en nuevos productos de papel. Existen tres categorías de papel que pueden utilizarse como materia prima para papel reciclado: molido, desechos de pre-consumo y desecho de post-consumo. El papel molido son recortes y trozos provenientes de la manufactura del papel, y se reciclan internamente en una fábrica de papel. Los desechos pre-consumo son materiales que ya han pasado por la fábrica de papel, y que han sido rechazados antes de estar preparados para el consumo. Los desechos post-consumo son materiales de papel ya utilizados que el consumidor rechaza, tales como viejas revistas o periódicos, material de oficina, guías telefónicas, etc. El papel que se considera adecuado para el reciclaje es denominado "desecho de papel".`,
     items:"Papel y cartón limpio y seco, no debe estar arrugado, no se debe depositar allí papel aluminio, papel carbón, papel térmico (como el de fax), papel higiénico, servilletas, pañuelos desechables."
    },
    {name:"Plástico",
     img:"assets/img/plastico.png",
     info:`
     imagen de un contenedor amarillo de plástico y envases.
     El reciclado de plástico es el proceso de recuperación de desechos de plásticos. Las tres principales finalidades del plástico reciclado son la reutilización directa, el aprovechamiento como materia prima para la fabricación de nuevos productos y su conversión como combustible o como nuevos productos químicos. Antes de su reciclaje, los plásticos se clasifican de acuerdo a su tipo de resina. Aunque se han utilizado varios métodos a lo largo del tiempo para distinguir las resinas, actualmente se utilizan los infrarrojos. Después de separarlos se trituran y se eliminan las impurezas, como las etiquetas de papel. Luego se funde y se divide en esferas pequeñas que posteriormente se utilizan para la fabricación de otros productos.

     Existen tres principales tipos de reciclaje:

     Reciclaje mecánico: método que consiste en separar los plásticos por clase, lavarlos y triturarlos hasta convertirlos en pequeños trozos que se fundirán en moldes para producir nuevos productos.
     Reciclaje químico: método que consiste en la degradación del plástico mediante calor para resultar nuevamente moléculas simples.
     Recuperación energética: método que convierte el plástico en un combustible para la generación de energía.`,
     items:"Material limpio y seco, envases de bebidas no retornables inservibles, vasos desechables, bolsas plásticas, no se debe depositar allí las envolturas de mecato."
    },
    {name:"Vidrio",
     img:"assets/img/vidrio.png",
     info:`El reciclaje del vidrio supone un menor uso de recursos y materias primas que la fabricación de vidrio a partir de arena, cal y sosa.1​2​3​

     Cada kilogramo de material reciclado puede ser nuevamente reutilizado y reciclado. El vidrio es un material ideal para ser reciclado, ya que puede reciclarse infinidad de veces sin perder sus propiedades.

     El uso de vidrio reciclado ayuda a ahorrar la energía de su producción (hasta un 60 %), es menos costoso, ayuda a reducir los residuos finalmente enviados a las plantas de residuos y vertederos y reduce el consumo de materias primas.

     La mayor parte del vidrio reciclado se puede utilizar para hacer nuevos envases semejantes a los desechados. Además, una pequeña proporción se utiliza para la fabricación de otros materiales de construcción, como ladrillos, cerámicas, asfaltos, etc.

     El vidrio reciclado requiere 26 % menos de energía que su fabricación desde cero y reduce en un 20 % las emisiones a la atmósfera de la fabricación, contaminando un 40 % menos de agua, lo que equivale a ahorrar aproximadamente 1,2 kilogramos de material virgen, así como cada tonelada de desechos de vidrio que se recicla evita que 315 kilogramos de dióxido de carbono se liberen a la atmósfera durante la fabricación de vidrio.`,
     items:"Botellas, envases y frascos no retornables. No se considera vidrio reciclable los bombillos o espejos rotos."
    },
    {name:"Metales",
     img:"assets/img/metales.png",
     info:`Un coche de tamaño medio requiere aproximadamente. 800 kg. de acero y 130 kg. de metales no ferrosos. Si el nivel de propiedad de autos fuere en todo el mundo como en EE.UU., las propia producción automotriz se habría agotado por acabar todos las reservas conocidas de hierro. El reciclaje de los metales contribuye significantemente a no empeorar la situación actual de contaminación. Al reciclar la chatarra se reduce la contaminación del agua, aire y los desechos de la minería en un 70%. Obtener aluminio reciclado reduce un 95% la contaminación, y contribuye a la menor utilización de energía eléctrica, en comparación con el procesado de materiales vírgenes. Reciclando una lata de refresco se ahorra la energía necesaria para mantener un televisor encendido durante 3 horas.

     Una gran ventaja del reciclaje del metal, en relación al papel, es que ilimitado el número de veces que se puede reciclar. Sin embargo presenta una desventaja, no se puede reciclar en casa. Una vez allí se lo corta en trozos, se le somete al altas temperaturas y se le da la nueva forma deseada.

     De los 784 millones de toneladas anuales producidas de acero en el mundo, cerca del 43% es reciclada proveniente de chatarra. Esto equivale al peso de 150 torres Eiffel o 1,2 millones de autos cada día.

     En un año normal, la industria mundial del acero a través del reciclado, ahorra el equivalente a la energía requerida para 110 millones de hogares.

     El acero es completamente reciclable al final de la vida útil del producto y podría ser reciclado un número ilimitado de veces, sin perder calidad.

     Un producto de acero puede reciclarse a pesar de su origen. Es el material más reciclado del mundo, siendo reciclado más que el aluminio, el plástico y el vidrio sumados.`,
     items:`Latas de conservas, Latas de cerveza, Tapas de metal, Botones de metal, Papel aluminio, Bolsa interior de la leche en polvo, Alfileres, Alambre, Cacerola de aluminio, etc.`
    }
  ]
  constructor(public navCtrl: NavController) {
  }



  goToInfo(i){
    console.log(i);
    console.log(this.recicleItems[i]);
    this.navCtrl.push(OrdinariosPage,{pageInfo:this.recicleItems[i]});
  }
}
