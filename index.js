
        
        //highLight Code
        document.addEventListener('DOMContentLoaded', function() {
          
        function highlightCode() {
            
            document.querySelectorAll('.code').forEach(function(codeElement){
    
            const codeContent = codeElement.innerHTML;
            const codeLines = codeContent.split('\n');
            let highlightedCode = '';

        for (const line of codeLines) {
        
    
        // Verifica si la línea contiene etiquetas HTML
         if (/<[a-z][\s\S]*>/i.test(line)) 
        {
            
          // Si la línea contiene etiquetas HTML, agrégala sin resaltar
            highlightedCode += '<div class="code-line">' + line + '</div>';
        } else {

            // Agrega resaltado de sintaxis para JavaScript (puedes agregar más reglas para otros lenguajes)
            const highlightedLine = line
                .replace(/(['"])(.*?)\1/g, '<span class="string">$1$2$1</span>')
                .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
                .replace(/\b(if|else|for|while)\b/g, '<span class="keyword">$1</span>')
                .replace(/\b(function)\s+(\w+)\s*()/g, '<span class="keyword">$1</span> <span class="function-name">$2</span>')
                .replace(/\.(.*?)(?=[\s.({\[]|$)/g, '.<span class="function">$1</span>')
                .replace(/\b(var|let|const)\s+(\w+)\s*=/g, '<span class="variable">$1</span> <span class="var-name">$2</span>=')
                .replace(/\/\/(.*)/g, '<span class="comment">//$1</span>')
                .replace(/&lt;script&gt;/g, '<span class="scriptTag">&lt;script&gt;</span>') 
                .replace(/&lt;\/script&gt;/g, '<span class="scriptTag">&lt;/script&gt;</span>');
                
                
                

                
                
            // Agrega la línea resaltada al código final
            highlightedCode += '<div class="code-line">' + highlightedLine + '</div>';
        }
    }

    // Actualiza el elemento de código con el código resaltado
    codeElement.innerHTML = highlightedCode;
      })
}

// Llama a la función de resaltado cuando se carga la página
window.onload = highlightCode;
                 
});



        //code Generator

    document.addEventListener("DOMContentLoaded", function()
    {
           setTimeout(function() {
               
    document.querySelectorAll('.input-group__input').forEach(function(e) {
  e.addEventListener('keydown', function() {
    if (event.key === 'Enter' || event.key === 'Tab') {
       generateCode();
  }
  });
});
               
      document.querySelector('#generateCode').addEventListener('click',function()
                                                         {
                                                             generateCode();
                                                         });         
               
               
               
        var activatorTypeSelect = document.getElementById('activatorType');
        var eventName;
        var generatedEventName = document.querySelectorAll('#generatedEventName');
               
        //link click
        var linkClickUrl;     
        var generatedlinkClickUrl = document.querySelectorAll('#generatedlinkClickUrl');
        var linkClickTextBox = document.getElementById('link-click-text-box');
        var linkClickCode = document.getElementById('link-click-code');
        //click id
        var clickIdSelector;
        var generatedIdClick = document.querySelectorAll('#generatedIdClick');
        var idClickTextBox = document.getElementById('id-click-text-box'); 
        var idClickCode = document.getElementById('id-click-code');
        //click class
        var clickClassSelector;
        var generatedClassClick = document.querySelectorAll('#generatedClassClick');
        var classClickTextBox = document.getElementById('class-click-text-box')
        var classClickCode = document.getElementById('class-click-code');   
        //click attribute
        var clickAttributeSelector;
        var generatedAttributeClick = document.querySelectorAll('#generatedAttributeClick');
        var attributeClickTextBox = document.getElementById('attribute-click-text-box')
        var attributeClickCode = document.getElementById('attribute-click-code');
        //click  forEach attribute
        var clickForEachAttributeSelector;
        var generatedAttributeForEachClick = document.querySelectorAll('#generatedAttributeForEachClick');
        var forEachAttributeClickTextBox = document.getElementById('forEachAttribute-click-text-box')
        var forEachAttributeClickCode = document.getElementById('forEachAttribute-click-code');
        //click  forEach attribute
        var clickForEachSelector;
        var generatedForEachClick = document.querySelectorAll('#generatedForEachClick');
        var forEachClickTextBox = document.getElementById('forEach-click-text-box')
        var forEachClickCode = document.getElementById('forEach-click-code');        
        // formThnkMsg
        var formThnkMsgSelector;
        var generatedformThnkMsg = document.querySelectorAll('#generatedformThnkMsg');
        var formThnkMsgTextBox = document.getElementById('formThnkMsg-text-box')
        var formThnkMsgCode = document.getElementById('formThnkMsg-code');
        // formThnkMsgEnhanced
        var formThnkMsgEnhancedSelector;
        var generatedformThnkMsgEnhanced = document.querySelectorAll('#generatedformThnkMsgEnhanced');
        var formThnkMsgEnhancedTextBox = document.getElementById('formThnkMsgEnhanced-text-box')
        var formThnkMsgEnhancedCode = document.getElementById('formThnkMsgEnhanced-code');
        // formClickTextEnhanced
        var formClickTextEnhancedSelector;
        var generatedformClickTextEnhanced = document.querySelectorAll('#generatedformClickTextEnhanced');
        var formClickTextEnhancedTextBox = document.getElementById('formClickTextEnhanced-text-box')
        var formClickTextEnhancedCode = document.getElementById('formClickTextEnhanced-code');
        // formClickSelectorEnhanced
        var formClickSelectorEnhancedSelector;
        var generatedformClickSelectorEnhanced = document.querySelectorAll('#generatedformClickSelectorEnhanced');
        var formClickSelectorEnhancedTextBox = document.getElementById('formClickSelectorEnhanced-text-box')
        var formClickSelectorEnhancedCode = document.getElementById('formClickSelectortEnhanced-code'); 
        // ShadowRootClick
        var ShadowRootSelector;
        var ShadowRootButtonSelector;
        var generatedShadowRootSelector = document.querySelectorAll('#generatedShadowRootSelector');
        var generatedShadowRootButtonSelector = document.querySelectorAll('#generatedShadowRootButtonSelector');
        var ShadowRootSelectorTextBox = document.getElementById('ShadowRootSelector-text-box')
        var ShadowRootButtonTextBox = document.getElementById('ShadowRootButton-text-box')
        var shadowRootClickcode = document.getElementById('shadowRootClick-code'); 
        // iframeClick
        var iframeClickSelector;
        var iframeClickButtonSelector;
        var generatediframeClickSelector = document.querySelectorAll('#generatediframeClickSelector');
        var generatediframeClickButtonSelector = document.querySelectorAll('#generatediframeClickButtonSelector');
        var iframeClickSelectorTextBox = document.getElementById('iframeClickSelector-text-box')
        var iframeClickButtonTextBox = document.getElementById('iframeClickButton-text-box')
        var iframeClickcode = document.getElementById('iframeClick-code'); 
         // iframeThanksMessage
        var iframeFormSelector;
        var iframeThanksMessageSelector;
        var generatediframeThanksMessage = document.querySelectorAll('#generatediframeThanksMessage');
        var generatediframeThanksSelector = document.querySelectorAll('#generatediframeThanksSelector');
        var iframeFormSelectorTextBox = document.getElementById('iframeFormSelector-text-box')
        var iframeThanksMessageTextBox = document.getElementById('iframeThanksMessage-text-box')
        var iframeThanksMessageCode = document.getElementById('iframeThanksMessage-code'); 
               
        
        function linkClick()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              linkClickUrl = document.querySelector("#link-click-textValue").value;

                              linkClickCode.style.display = 'block';
                                
                              
                            
                                generatedlinkClickUrl.forEach(function(e)
                                   {
                                        e.textContent = linkClickUrl;
                                   
                                   })
                                generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
        
        function clickId()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              clickIdSelector = document.querySelector("#id-click-textValue").value;
                            
                              idClickCode.style.display = 'block';
                                
                              
                            
                                generatedIdClick.forEach(function(e)
                                   {
                                    e.textContent = clickIdSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                     
                                   })
                             }
        
         function clickClass()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              clickClassSelector = document.querySelector("#class-click-textValue").value;
                            
                              classClickCode.style.display = 'block';
                                
                              
                            
                                generatedClassClick.forEach(function(e)
                                   {
                                    e.textContent = clickClassSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
        
        function formThanksMessage()
                            {
                                
                              eventName = document.querySelector("#event-name-value").value;
                              formThnkMsgSelector = document.querySelector("#formThnkMsg-textValue").value;
                            
                              formThnkMsgCode.style.display = 'block';
                                
                              
                            
                                generatedformThnkMsg.forEach(function(e)
                                   {
                                    e.textContent = formThnkMsgSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                                
                                 
                             }
        
        function formThanksMessageEnhanced()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              formThnkMsgEnhancedSelector = document.querySelector("#formThnkMsgEnhanced-textValue").value;
                            
                              formThnkMsgEnhancedCode.style.display = 'block';
                                
                             
                            
                                generatedformThnkMsgEnhanced.forEach(function(e)
                                   {
                                    e.textContent = formThnkMsgEnhancedSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
        
        function formClickTextEnhanced()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              formClickTextEnhancedSelector = document.querySelector("#formClickTextEnhanced-textValue").value;
                            
                              formClickTextEnhancedCode.style.display = 'block';
                                
                              
                            
                                generatedformClickTextEnhanced.forEach(function(e)
                                   {
                                    e.textContent = formClickTextEnhancedSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
        
       
        
        function clickOnAttribute()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              clickAttributeSelector = document.querySelector("#attribute-click-textValue").value;
                            
                              attributeClickCode.style.display = 'block';
                                
                              
                            
                                generatedAttributeClick.forEach(function(e)
                                   {
                                    e.textContent = clickAttributeSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
          function clickOnForEachAttribute()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              clickForEachAttributeSelector = document.querySelector("#forEachAttribute-attribute-click-textValue").value;
                            
                              forEachAttributeClickCode.style.display = 'block';

                                generatedAttributeForEachClick.forEach(function(e)
                                   {
                                    e.textContent = clickForEachAttributeSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
               
          function clickOnForEach()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              clickForEachSelector = document.querySelector("#forEach-click-textValue").value;
                            
                              forEachClickCode.style.display = 'block';

                                generatedForEachClick.forEach(function(e)
                                   {
                                    e.textContent = clickForEachSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
               
               function formClickSelectorEnhanced()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              formClickSelectorEnhancedSelector = document.querySelector("#formClickSelectorEnhanced-textValue").value;
                            
                              formClickSelectorEnhancedCode.style.display = 'block';
                            
                                generatedformClickSelectorEnhanced .forEach(function(e)
                                   {
                                    e.textContent = formClickSelectorEnhancedSelector;
                                   })
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
               
               function ShadowRootClick()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              ShadowRootSelector = document.querySelector("#ShadowRootSelector-textValue").value;
                              ShadowRootButtonSelector = document.querySelector("#ShadowRootButtonSelector-textValue").value;
                            
                              ShadowRootSelectorTextBox.style.display = 'block';
                              ShadowRootButtonTextBox.style.display = 'block';
                            
                                generatedShadowRootSelector.forEach(function(e)
                                   {
                                    e.textContent = ShadowRootSelector;
                                   })
                                
                                generatedShadowRootButtonSelector.forEach(function(e)
                                   {
                                    e.textContent = ShadowRootButtonSelector;
                                   })
                                
                                    
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
               
                function iframeClick()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              iframeClickSelector = document.querySelector("#iframeClickSelector-textValue").value;
                              iframeClickButtonSelector = document.querySelector("#iframeClickButtonSelector-textValue").value;
                            
                              iframeClickSelectorTextBox.style.display = 'block';
                              iframeClickButtonTextBox.style.display = 'block';
                            
                                generatediframeClickSelector.forEach(function(e)
                                   {
                                    e.textContent = iframeClickSelector;
                                   })
                                
                                generatediframeClickButtonSelector.forEach(function(e)
                                   {
                                    e.textContent =iframeClickButtonSelector;
                                   })
                                
                                    
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
               
               function iframeThanksMessage()
                            {
                              eventName = document.querySelector("#event-name-value").value;
                              iframeFormSelector = document.querySelector("#iframeFormSelector-textValue").value;
                              iframeThanksMessageSelector = document.querySelector("#iframeThanksMessage-textValue").value;
                            
                              iframeFormSelectorTextBox.style.display = 'block';
                              iframeThanksMessageTextBox.style.display = 'block';
                            
                                generatediframeThanksMessage.forEach(function(e)
                                   {
                                    e.textContent = iframeFormSelector;
                                   })
                                
                                generatediframeThanksSelector.forEach(function(e)
                                   {
                                    e.textContent = iframeThanksMessageSelector;
                                   })
                                
                                    
                                 generatedEventName.forEach(function(e)
                                   {
                                    e.textContent = eventName;
                                   })
                             }
        
        
        
        
        function generateCode()
            {
                
                        if (activatorTypeSelect.value === 'link click') 
                            {
                                linkClick();   
                           } 
                            
                             else if (activatorTypeSelect.value === 'id click')
                            {  
                               clickId();
                            }
                            else if (activatorTypeSelect.value === 'class click')
                            {  
                               clickClass();
                            }  
                     
                            else if (activatorTypeSelect.value === 'attribute click')
                            {  
                               clickOnAttribute();
                            } 
                     
                            else if (activatorTypeSelect.value === 'forEach attribute click')
                            {  
                               clickOnForEachAttribute();
                            }
                            
                             else if (activatorTypeSelect.value === 'forEach click')
                            {  
                               clickOnForEach();
                            } 
                            
                            else if (activatorTypeSelect.value === 'formulario mensaje gracias')
                            {  
                               formThanksMessage();
                            } 
                            
                            else if (activatorTypeSelect.value === 'formulario mensaje gracias mejorado')
                            {  
                               formThanksMessageEnhanced();
                            }
                     
                            else if (activatorTypeSelect.value === 'formulario click text mejorado')
                            {  
                               formClickTextEnhanced();
                            }
                
                            else if (activatorTypeSelect.value === 'formulario click selector mejorado')
                            {  
                               formClickSelectorEnhanced();
                            }
                
                            else if (activatorTypeSelect.value === 'Click ShadowRoot')
                            {  
                               ShadowRootClick();
                            }
                            
                            else if (activatorTypeSelect.value === 'click iframe')
                            {  
                               iframeClick();
                            }
                            
                            else if (activatorTypeSelect.value === 'iframe mensaje gracias')
                            {  
                               iframeThanksMessage();
                            }
            }
               
            activatorTypeSelect.addEventListener('change', function () 
            {
            if (activatorTypeSelect.value === 'link click') 
            {
                        linkClickTextBox.style.display = 'block';
                        linkClickCode.style.display = 'block';
                            
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                        
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none'
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            }  
            else if (activatorTypeSelect.value === 'id click')
            {           
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'block';
                        idClickCode.style.display = 'block';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                    
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                        
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none'
                
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                        
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
          
            }
            else if (activatorTypeSelect.value === 'class click')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'block';
                        classClickCode.style.display = 'block';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                        
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                        
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode.style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            }
            
            else if (activatorTypeSelect.value === 'attribute click')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'block';
                        attributeClickCode.style.display = 'block';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                        
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                        
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            }  
            
            else if (activatorTypeSelect.value === 'formulario mensaje gracias')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'block';
                        formThnkMsgCode.style.display = 'block';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            }
            else if (activatorTypeSelect.value === 'formulario mensaje gracias mejorado')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'block';
                        formThnkMsgEnhancedCode.style.display = 'block';
                        
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                        
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
                       
            } 
            
            else if (activatorTypeSelect.value === 'formulario click text mejorado')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'block';
                        formClickTextEnhancedCode.style.display = 'block';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';              
                       
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            }
            
            else if (activatorTypeSelect.value === 'forEach attribute click')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'block';
                        forEachAttributeClickCode.style.display = 'block'; 
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none'; 
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            } 
                
            else if (activatorTypeSelect.value === 'forEach click')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'block';
                        forEachClickCode.style.display = 'block';  
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
            }
                
            else if (activatorTypeSelect.value === 'formulario click selector mejorado')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'block';
                        formClickSelectorEnhancedCode.style.display = 'block';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
                       
            }
            
            else if (activatorTypeSelect.value === 'Click ShadowRoot')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'block';
                        ShadowRootButtonTextBox.style.display = 'block';
                        ShadowRootButtonTextBox.style.display = 'block';
                        shadowRootClickcode .style.display = 'block'
                    
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                        
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
                       
            }
                
            else if (activatorTypeSelect.value === 'click iframe')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode.style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'block';
                        iframeClickButtonTextBox.style.display = 'block';
                        iframeClickcode.style.display = 'block'
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
                       
            }
            
            else if (activatorTypeSelect.value === 'iframe mensaje gracias')
            {  
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                        
                        formThnkMsgTextBox.style.display = 'none';
                        formThnkMsgCode.style.display = 'none';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                        
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode.style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'block';
                        iframeThanksMessageTextBox.style.display = 'block';
                        iframeThanksMessageCode.style.display = 'block'; 
                       
            }
               
                
            else 
            {
                     /*   linkClickTextBox.style.display = 'none';
                
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';*/
                         
            }    
            }) 
                
                
    
            if (activatorTypeSelect.value === 'formulario mensaje gracias') 
            {
                        linkClickTextBox.style.display = 'none';
                        linkClickCode.style.display = 'none';
                            
                        idClickTextBox.style.display = 'none';
                        idClickCode.style.display = 'none';
                
                        classClickTextBox.style.display = 'none';
                        classClickCode.style.display = 'none';
                        
                        attributeClickTextBox.style.display = 'none';
                        attributeClickCode.style.display = 'none';
                
                        formThnkMsgTextBox.style.display = 'block';
                        formThnkMsgCode.style.display = 'block';
                
                        formThnkMsgEnhancedTextBox.style.display = 'none';
                        formThnkMsgEnhancedCode.style.display = 'none';
                
                        formClickTextEnhancedTextBox.style.display = 'none';
                        formClickTextEnhancedCode.style.display = 'none';
                
                        forEachAttributeClickTextBox.style.display = 'none';
                        forEachAttributeClickCode.style.display = 'none';
                    
                        forEachClickTextBox.style.display = 'none';
                        forEachClickCode.style.display = 'none';
                        
                        formClickSelectorEnhancedTextBox.style.display = 'none';
                        formClickSelectorEnhancedCode.style.display = 'none';
                        
                        ShadowRootSelectorTextBox.style.display = 'none';
                        ShadowRootButtonTextBox.style.display = 'none';
                        shadowRootClickcode .style.display = 'none';
                
                        iframeClickSelectorTextBox.style.display = 'none';
                        iframeClickButtonTextBox.style.display = 'none';
                        iframeClickcode.style.display = 'none';
                
                        iframeFormSelectorTextBox.style.display = 'none';
                        iframeThanksMessageTextBox.style.display = 'none';;
                        iframeThanksMessageCode.style.display = 'none';
                      
            } 
            
            else 
            {
                        //linkClickTextBox.style.display = 'none';
            
            }  

        
        
    });
}, 200);
        

    

        //copiar codigo
        document.addEventListener('DOMContentLoaded', function() {
            
            setTimeout(function() {
            
        document.querySelectorAll('#copy-code-button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var codeElement = btn.parentNode.parentNode;;
    if (codeElement) {
      var codeText = codeElement.innerText.trim();

      // Crear un elemento de codeText temporal para copiar el contenido
      var tempTextAreaElement = document.createElement('textarea');
      tempTextAreaElement.value = codeText;
      document.body.appendChild(tempTextAreaElement);

      // Seleccionar y copiar el contenido del elemento temporal
      tempTextAreaElement.select();
      document.execCommand('copy');

      // Eliminar el elemento temporal
      document.body.removeChild(tempTextAreaElement);

                    }
                 });
            });
          }, 200);
       });     
        
 