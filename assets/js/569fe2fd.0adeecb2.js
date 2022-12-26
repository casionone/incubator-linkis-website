"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[50248],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=l(a),u=i,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||r;return a?t.createElement(m,s(s({ref:n},p),{},{components:a})):t.createElement(m,s({ref:n},p))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1904:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(87462),i=(a(67294),a(3905));const r={title:"Apache Linkis 1.3.0 PES(Public Enhancement Services) Some Service Merge",authors:["aiceflower"],tags:["blog","linki1.3.0","service merge"]},s=void 0,o={permalink:"/blog/2022/10/09/linkis-service-merge",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/blog/2022-10-09-linkis-service-merge.md",source:"@site/blog/2022-10-09-linkis-service-merge.md",title:"Apache Linkis 1.3.0 PES(Public Enhancement Services) Some Service Merge",description:"Foreword",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"linki1.3.0",permalink:"/blog/tags/linki-1-3-0"},{label:"service merge",permalink:"/blog/tags/service-merge"}],readingTime:5.18,truncated:!1,authors:[{name:"aiceflower",title:"Development Engineer of WeBank",url:"https://github.com/aiceflower/",imageURL:"https://avatars.githubusercontent.com/u/22620332?s=400&v=4",key:"aiceflower"}],nextItem:{title:"Deploy Apache Linkis1.1.1 and DSS1.1.0 based on CDH6.3.2",permalink:"/blog/2022/09/27/linkis111-deploy"}},c={authorsImageUrls:[void 0]},l=[{value:"Foreword",id:"foreword",children:[]},{value:"Service merge changes",id:"service-merge-changes",children:[]},{value:"To be achieved",id:"to-be-achieved",children:[]},{value:"Specific changes",id:"specific-changes",children:[]}],p={toc:l};function g(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"foreword"},"Foreword"),(0,i.kt)("p",null,"With the development of business and the update and iteration of community products, we found that Linkis1 There are too many .X services, and services can be merged appropriately to reduce the number of services and facilitate deployment and debugging. At present, Linkis services are mainly divided into three categories, including computing governance services (CG: entrance/ecp/ecm/linkismanager), public enhancement services (PS: publicservice/datasource/cs) and microservice governance services (MG: Gateway/Eureka) . There are too many sub-services extended by these three types of services, and services can be merged, so that all PS services can be merged, CG services can be merged, and ecm services can be separated out. "),(0,i.kt)("h3",{id:"service-merge-changes"},"Service merge changes"),(0,i.kt)("p",null,"The main changes of this service merge are as follows: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Restful service forwarding: The modification point is mainly the forwarding logic of Gateway, similar to the current publicservice service merge parameter: wds.linkis.gateway.conf.publicservice.list "),(0,i.kt)("li",{parentName:"ul"},"Support Change the remote call of the RPC service to a local call, similar to LocalMessageSender, and now it is possible to complete the return of the local call by changing the Sender "),(0,i.kt)("li",{parentName:"ul"},"Configuration file changes "),(0,i.kt)("li",{parentName:"ul"},"Service start and stop script changes ")),(0,i.kt)("h3",{id:"to-be-achieved"},"To be achieved"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic goal: merge PS services into one service "),(0,i.kt)("li",{parentName:"ul"},"Basic goal: merge CG service into CG-Service and ECM"),(0,i.kt)("li",{parentName:"ul"},"Advanced goal: merge CG services into one server "),(0,i.kt)("li",{parentName:"ul"},"Final goal: remove eureka, gateway into single service ")),(0,i.kt)("h3",{id:"specific-changes"},"Specific changes"),(0,i.kt)("h4",{id:"gateway-changes-orgapachelinkisgatewayujesroutehacontextgatewayrouter"},"Gateway changes (org.apache.linkis.gateway.ujes.route.HaContextGatewayRouter)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//Override before changing \ndef route(gatewayContext: GatewayContext): ServiceInstance = { \n\n    if (gatewayContext.getGatewayRoute.getRequestURI.contains(HaContextGatewayRouter.CONTEXT_SERVICE_STR) || \n        gatewayContext.getGatewayRoute.getRequestURI.contains(HaContextGatewayRouter.OLD_CONTEXT_SERVICE_PREFIX)){ \n      val params: util.HashMap[String, String] = gatewayContext.getGatewayRoute.getParams \n      if (!gatewayContext.getRequest.getQueryParams.isEmpty) { \n        for ((k, vArr) <- gatewayContext.getRequest.getQueryParams) {\n          if (vArr.nonEmpty) {\n            params.putIfAbsent(k, vArr.head)\n          }\n        }\n      }\n      if (gatewayContext.getRequest.getHeaders.containsKey(ContextHTTPConstant.CONTEXT_ID_STR)) {\n        params.putIfAbsent(ContextHTTPConstant.CONTEXT_ID_STR, gatewayContext.getRequest.getHeaders.get(ContextHTTPConstant.CONTEXT_ID_STR)(0))\n      }\n      if (null == params || params.isEmpty) {\n        dealContextCreate(gatewayContext)\n      } else {\n        var contextId : String = null\n        for ((key, value) <- params) {\n          if (key.equalsIgnoreCase(ContextHTTPConstant.CONTEXT_ID_STR)) {\n            contextId = value\n            }\n        }\n        if (StringUtils.isNotBlank(contextId)) {\n          dealContextAccess(contextId.toString, gatewayContext)\n        } else {\n          dealContextCreate(gatewayContext)\n        }\n      }\n    }else{\n      null\n    }\n  }\n  //after modification\n  override def route(gatewayContext: GatewayContext): ServiceInstance = {\n\n    if (\n        gatewayContext.getGatewayRoute.getRequestURI.contains(\n          RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX\n        )\n    ) {\n      val params: util.HashMap[String, String] = gatewayContext.getGatewayRoute.getParams\n      if (!gatewayContext.getRequest.getQueryParams.isEmpty) {\n        for ((k, vArr) <- gatewayContext.getRequest.getQueryParams.asScala) {\n          if (vArr.nonEmpty) {\n            params.putIfAbsent(k, vArr.head)\n          }\n        }\n      }\n      if (gatewayContext.getRequest.getHeaders.containsKey(ContextHTTPConstant.CONTEXT_ID_STR)) {\n        params.putIfAbsent(\n          ContextHTTPConstant.CONTEXT_ID_STR,\n          gatewayContext.getRequest.getHeaders.get(ContextHTTPConstant.CONTEXT_ID_STR)(0)\n        )\n      }\n      if (null == params || params.isEmpty) {\n        dealContextCreate(gatewayContext)\n      } else {\n        var contextId: String = null\n        for ((key, value) <- params.asScala) {\n          if (key.equalsIgnoreCase(ContextHTTPConstant.CONTEXT_ID_STR)) {\n            contextId = value\n          }\n        }\n        if (StringUtils.isNotBlank(contextId)) {\n          dealContextAccess(contextId, gatewayContext)\n        } else {\n          dealContextCreate(gatewayContext)\n        }\n      }\n    } else {\n      null\n    }\n  }\n\n\n  // before modification\n  def dealContextCreate(gatewayContext:GatewayContext):ServiceInstance = {\n    val serviceId =  findService(HaContextGatewayRouter.CONTEXT_SERVICE_STR, list => {\n      val services = list.filter(_.contains(HaContextGatewayRouter.CONTEXT_SERVICE_STR))\n      services.headOption\n    })\n    val serviceInstances = ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (serviceInstances.size > 0) {\n      val index = new Random().nextInt(serviceInstances.size)\n      serviceInstances(index)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n  //after modification\n  def dealContextCreate(gatewayContext: GatewayContext): ServiceInstance = {\n    val serviceId = findService(\n      RPCConfiguration.CONTEXT_SERVICE_NAME,\n      list => {\n        val services = list.filter(_.contains(RPCConfiguration.CONTEXT_SERVICE_NAME))\n        services.headOption\n      }\n    )\n    val serviceInstances =\n      ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (serviceInstances.size > 0) {\n      val index = new Random().nextInt(serviceInstances.size)\n      serviceInstances(index)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n\n  // before modification\n  def dealContextAccess(contextIdStr:String, gatewayContext: GatewayContext):ServiceInstance = {\n    val contextId : String = {\n      var tmpId : String = null\n      if (serializationHelper.accepts(contextIdStr)) {\n        val contextID : ContextID = serializationHelper.deserialize(contextIdStr).asInstanceOf[ContextID]\n        if (null != contextID) {\n          tmpId = contextID.getContextId\n        } else {\n          logger.error(s"Deserializate contextID null. contextIDStr : " + contextIdStr)\n        }\n      } else {\n        logger.error(s"ContxtIDStr cannot be deserialized. contextIDStr : " + contextIdStr)\n      }\n      if (null == tmpId) {\n        contextIdStr\n      } else {\n        tmpId\n      }\n    }\n    val instances = contextIDParser.parse(contextId)\n    var serviceId:Option[String] = None\n    serviceId = findService(HaContextGatewayRouter.CONTEXT_SERVICE_STR, list => {\n      val services = list.filter(_.contains(HaContextGatewayRouter.CONTEXT_SERVICE_STR))\n        services.headOption\n      })\n    val serviceInstances = ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (instances.size() > 0) {\n      serviceId.map(ServiceInstance(_, instances.get(0))).orNull\n    } else if (serviceInstances.size > 0) {\n      serviceInstances(0)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n\n}\n//after modification\ndef dealContextAccess(contextIdStr: String, gatewayContext: GatewayContext): ServiceInstance = {\n    val contextId: String = {\n      var tmpId: String = null\n      if (serializationHelper.accepts(contextIdStr)) {\n        val contextID: ContextID =\n          serializationHelper.deserialize(contextIdStr).asInstanceOf[ContextID]\n        if (null != contextID) {\n          tmpId = contextID.getContextId\n        } else {\n          logger.error(s"Deserializate contextID null. contextIDStr : " + contextIdStr)\n        }\n      } else {\n        logger.error(s"ContxtIDStr cannot be deserialized. contextIDStr : " + contextIdStr)\n      }\n      if (null == tmpId) {\n        contextIdStr\n      } else {\n        tmpId\n      }\n    }\n    val instances = contextIDParser.parse(contextId)\n    var serviceId: Option[String] = None\n    serviceId = findService(\n      RPCConfiguration.CONTEXT_SERVICE_NAME,\n      list => {\n        val services = list.filter(_.contains(RPCConfiguration.CONTEXT_SERVICE_NAME))\n        services.headOption\n      }\n    )\n    val serviceInstances =\n      ServiceInstanceUtils.getRPCServerLoader.getServiceInstances(serviceId.orNull)\n    if (instances.size() > 0) {\n      serviceId.map(ServiceInstance(_, instances.get(0))).orNull\n    } else if (serviceInstances.size > 0) {\n      serviceInstances(0)\n    } else {\n      logger.error(s"No valid instance for service : " + serviceId.orNull)\n      null\n    }\n  }\n\n// before modification\nobject HaContextGatewayRouter{\n  val CONTEXT_ID_STR:String = "contextId"\n  val CONTEXT_SERVICE_STR:String = "ps-cs"\n  @Deprecated\n  val OLD_CONTEXT_SERVICE_PREFIX = "contextservice"\n  val CONTEXT_REGEX: Regex = (normalPath(API_URL_PREFIX) + "rest_[a-zA-Z][a-zA-Z_0-9]*/(v\\\\d+)/contextservice/" + ".+").r\n}\n//after modification\nobject HaContextGatewayRouter {\n\n  val CONTEXT_ID_STR: String = "contextId"\n\n  @deprecated("please use RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX")\n  val CONTEXT_SERVICE_REQUEST_PREFIX = RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX\n\n  @deprecated("please use RPCConfiguration.CONTEXT_SERVICE_NAME")\n  val CONTEXT_SERVICE_NAME: String =\n    if (\n        RPCConfiguration.ENABLE_PUBLIC_SERVICE.getValue && RPCConfiguration.PUBLIC_SERVICE_LIST\n          .exists(_.equalsIgnoreCase(RPCConfiguration.CONTEXT_SERVICE_REQUEST_PREFIX))\n    ) {\n      RPCConfiguration.PUBLIC_SERVICE_APPLICATION_NAME.getValue\n    } else {\n      RPCConfiguration.CONTEXT_SERVICE_APPLICATION_NAME.getValue\n    }\n\n  val CONTEXT_REGEX: Regex =\n    (normalPath(API_URL_PREFIX) + "rest_[a-zA-Z][a-zA-Z_0-9]*/(v\\\\d+)/contextservice/" + ".+").r\n\n}\n')),(0,i.kt)("h4",{id:"rpc-service-changeorgapachelinkisrpcconfrpcconfiguration"},"RPC Service Change\uff08org.apache.linkis.rpc.conf.RPCConfiguration\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'//before modification\nval BDP_RPC_BROADCAST_THREAD_SIZE: CommonVars[Integer] = CommonVars("wds.linkis.rpc.broadcast.thread.num", new Integer(25))\n//after modification\nval BDP_RPC_BROADCAST_THREAD_SIZE: CommonVars[Integer] = CommonVars("wds.linkis.rpc.broadcast.thread.num", 25)\n\n//before modification\nval PUBLIC_SERVICE_LIST: Array[String] = CommonVars("wds.linkis.gateway.conf.publicservice.list", "query,jobhistory,application,configuration,filesystem,udf,variable,microservice,errorcode,bml,datasource").getValue .split(",") \n//after change \nval PUBLIC_SERVICE_LIST: Array[String] = CommonVars("wds.linkis.gateway.conf.publicservice.list", "cs,contextservice,data-source-manager,metadataquery,metadatamanager, query,jobhistory,application,configuration,filesystem,udf,variable,microservice,errorcode,bml,datasource").getValue.split(",") \n\n')),(0,i.kt)("h4",{id:"configuration-file-changes"},"Configuration file changes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"##Remove part #Delete the \n\nfollowing configuration files \nlinkis-dist/package/conf/linkis-ps-cs.properties \nlinkis-dist/package/conf/linkis-ps-data-source-manager.properties\nlinkis-dist/package/conf/linkis-ps-metadataquery.properties\n\n##modified part\n\n#modify linkis-dist/package/conf/linkis-ps-publicservice.properties\n#restful before modification\nwds.linkis.server.restful.scan.packages=org.apache.linkis.jobhistory.restful,org.apache.linkis.variable.restful,org.apache.linkis.configuration.restful,org.apache.linkis.udf.api,org.apache.linkis.filesystem.restful,org.apache.linkis.filesystem.restful,org.apache.linkis.instance.label.restful,org.apache.linkis.metadata.restful.api,org.apache.linkis.cs.server.restful,org.apache.linkis.bml.restful,org.apache.linkis.errorcode.server.restful\n\n#restful after modification\nwds.linkis.server.restful.scan.packages=org.apache.linkis.cs.server.restful,org.apache.linkis.datasourcemanager.core.restful,org.apache.linkis.metadata.query.server.restful,org.apache.linkis.jobhistory.restful,org.apache.linkis.variable.restful,org.apache.linkis.configuration.restful,org.apache.linkis.udf.api,org.apache.linkis.filesystem.restful,org.apache.linkis.filesystem.restful,org.apache.linkis.instance.label.restful,org.apache.linkis.metadata.restful.api,org.apache.linkis.cs.server.restful,org.apache.linkis.bml.restful,org.apache.linkis.errorcode.server.restful\n\n#mybatis before modification\nwds.linkis.server.mybatis.mapperLocations=classpath:org/apache/linkis/jobhistory/dao/impl/*.xml,classpath:org/apache/linkis/variable/dao/impl/*.xml,classpath:org/apache/linkis/configuration/dao/impl/*.xml,classpath:org/apache/linkis/udf/dao/impl/*.xml,classpath:org/apache/linkis/instance/label/dao/impl/*.xml,classpath:org/apache/linkis/metadata/hive/dao/impl/*.xml,org/apache/linkis/metadata/dao/impl/*.xml,classpath:org/apache/linkis/bml/dao/impl/*.xml\n\nwds.linkis.server.mybatis.typeAliasesPackage=org.apache.linkis.configuration.entity,org.apache.linkis.jobhistory.entity,org.apache.linkis.udf.entity,org.apache.linkis.variable.entity,org.apache.linkis.instance.label.entity,org.apache.linkis.manager.entity,org.apache.linkis.metadata.domain,org.apache.linkis.bml.entity\n\nwds.linkis.server.mybatis.BasePackage=org.apache.linkis.jobhistory.dao,org.apache.linkis.variable.dao,org.apache.linkis.configuration.dao,org.apache.linkis.udf.dao,org.apache.linkis.instance.label.dao,org.apache.linkis.metadata.hive.dao,org.apache.linkis.metadata.dao,org.apache.linkis.bml.dao,org.apache.linkis.errorcode.server.dao,org.apache.linkis.publicservice.common.lock.dao\n\n#mybatis after modification\nwds.linkis.server.mybatis.mapperLocations=classpath*:org/apache/linkis/cs/persistence/dao/impl/*.xml,classpath:org/apache/linkis/datasourcemanager/core/dao/mapper/*.xml,classpath:org/apache/linkis/jobhistory/dao/impl/*.xml,classpath:org/apache/linkis/variable/dao/impl/*.xml,classpath:org/apache/linkis/configuration/dao/impl/*.xml,classpath:org/apache/linkis/udf/dao/impl/*.xml,classpath:org/apache/linkis/instance/label/dao/impl/*.xml,classpath:org/apache/linkis/metadata/hive/dao/impl/*.xml,org/apache/linkis/metadata/dao/impl/*.xml,classpath:org/apache/linkis/bml/dao/impl/*.xml\n\nwds.linkis.server.mybatis.typeAliasesPackage=org.apache.linkis.cs.persistence.entity,org.apache.linkis.datasourcemanager.common.domain,org.apache.linkis.datasourcemanager.core.vo,org.apache.linkis.configuration.entity,org.apache.linkis.jobhistory.entity,org.apache.linkis.udf.entity,org.apache.linkis.variable.entity,org.apache.linkis.instance.label.entity,org.apache.linkis.manager.entity,org.apache.linkis.metadata.domain,org.apache.linkis.bml.entity\n\nwds.linkis.server.mybatis.BasePackage=org.apache.linkis.cs.persistence.dao,org.apache.linkis.datasourcemanager.core.dao,org.apache.linkis.jobhistory.dao,org.apache.linkis. variable.dao,org.apache.linkis.configuration.dao,org.apache.linkis.udf.dao,org.apache.linkis.instance.label.dao,org.apache.linkis.metadata.hive.dao,org. apache.linkis.metadata.dao,org.apache.linkis.bml.dao,org.apache.linkis.errorcode.server.dao,org.apache.linkis.publicservice.common.lock.dao \n")),(0,i.kt)("h4",{id:"deployment-script-changes-linkis-distpackagesbinlinkis-start-allsh"},"Deployment script changes (linkis-dist/package/sbin/linkis-start-all.sh)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"#Service","#Service":!0},'startup script remove the following part \n\n#linkis-ps-cs \nSERVER_NAME="ps-cs" \nSERVER_IP=$CS_INSTALL_IP \nstartApp \n\nif [ "$ENABLE_METADATA_QUERY" == "true" ]; then \n  #linkis-ps-data-source-manager\n  SERVER_NAME="ps-data-source-manager"\n  SERVER_IP=$DATASOURCE_MANAGER_INSTALL_IP\n  startApp\n\n  #linkis-ps-metadataquery\n  SERVER_NAME="ps-metadataquery"\n  SERVER_IP=$METADATA_QUERY_INSTALL_IP\n  startApp\nfi\n\n#linkis-ps-cs\nSERVER_NAME="ps-cs"\nSERVER_IP=$CS_INSTALL_IP\ncheckServer\n\nif [ "$ENABLE_METADATA_QUERY" == "true" ]; then\n  #linkis-ps-data-source-manager\n  SERVER_NAME="ps-data-source-manager"\n  SERVER_IP=$DATASOURCE_MANAGER_INSTALL_IP\n  checkServer\n\n  #linkis-ps-metadataquery\n  SERVER_NAME="ps-metadataquery"\n  SERVER_IP=$METADATA_QUERY_INSTALL_IP\n  checkServer\nfi\n\n\n#Service stop script remove the following part \n#linkis-ps-cs \nSERVER_NAME="ps-cs" \nSERVER_IP=$CS_INSTALL_IP \nstopApp \n\nif [ "$ENABLE_METADATA_QUERY" == "true" ]; then \n  #linkis-ps-data-source-manager \n  SERVER_NAME ="ps-data-source-manager" \n  SERVER_IP=$DATASOURCE_MANAGER_INSTALL_IP \n  stopApp \n\n  #linkis-ps-metadataquery \n  SERVER_NAME="ps-metadataquery" \n  SERVER_IP=$METADATA_QUERY_INSTALL_IP \n  stopApp \nfi \n\n')),(0,i.kt)("p",null,"For more details on service merge changes, see: https://github .com/apache/incubator-linkis/pull/2927/files"))}g.isMDXComponent=!0}}]);