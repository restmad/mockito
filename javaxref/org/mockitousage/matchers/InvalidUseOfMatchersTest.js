defineStructure(
"InvalidUseOfMatchersTest",function(factory){with(factory) { typeTable(["org.mockito.Matchers","cl"],["org.junit.After","an"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.AdditionalMatchers","cl"],["org.mockito.Mockito","cl"],["org.mockito.StateResetter","cl"],["org.mockito.TestBase","cl"],["org.mockito.exceptions.misusing.InvalidUseOfMatchersException","cl"],["org.mockitousage.IMethods","it"],["org.mockitousage.matchers.InvalidUseOfMatchersTest","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Class","cl"],["java.lang.Object","cl"],["java.lang.String","cl"],["org.mockito.internal.progress.OngoingStubbing","it"],["junit.framework.Assert","cl"],["org.mockito.util.Assertor","it"]),methodTable([10,"setUp",[],"me"],[6,"reset",[],"st me"],[5,"mock",[12],"st me"],[10,"resetState",[],"me"],[10,"shouldDetectWrongNumberOfMatchersWhenStubbing",[],"me"],[5,"stub",[13],"st me"],[9,"threeArgumentMethod",["int",13,14],"me"],[15,"toReturn",[13],"me"],[0,"eq",[13],"st me"],[16,"fail",[],"st me"],[10,"shouldDetectStupidUseOfMatchersWhenVerifying",[],"me"],[9,"oneArg",["boolean"],"me"],[5,"verify",[13],"st me"],[10,"shouldScreamWhenMatchersAreInvalid",[],"me"],[9,"simpleMethod",[14],"me"],[4,"not",[13],"st me"],[7,"assertThat",[13,17],"me"],[7,"messageContains",[14],"st me"],[4,"or",[13,13],"st me"]),localVariableTable(["e","shouldDetectWrongNumberOfMatchersWhenStubbing()-e"],["e","shouldDetectStupidUseOfMatchersWhenVerifying()-e"],["e","shouldScreamWhenMatchersAreInvalid()-e"],["e","shouldScreamWhenMatchersAreInvalid()-e2"],["e","shouldScreamWhenMatchersAreInvalid()-e3"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.matchers;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,nl,ip," org.junit.",T(1),";",nl,ip," org.junit.",T(2),";",nl,ip," org.junit.",T(3),";",nl,ip," org.mockito.",T(4),";",nl,ip," org.mockito.",T(5),";",nl,ip," org.mockito.",T(6),";",nl,ip," org.mockito.",T(7),";",nl,ip," org.mockito.exceptions.misusing.",T(8),";",nl,ip," org.mockitousage.",T(9),";",nl,nl,C(10,[],$("@",T(11),P(L("\"unchecked\"")),nl,pu,_,c,_,I("InvalidUseOfMatchersTest"),_,ex,_,T(7),_,B(nl,nl,w(4),F(pi,_,T(9),_,I("mock"),";"),nl,nl,w(4),M(0,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("setUp"),P(),_,B(nl,w(8),T(6),".",N(1),P(),";",nl,w(8),G(10,"fi","mock")," = ",T(5),".",N(2),P(T(9),".",c),";",nl,w(4)))),nl,nl,w(4),M(3,[],[],$("@",T(1),nl,w(4),pu,_,v,_,I("resetState"),P(),_,B(nl,w(8),T(6),".",N(1),P(),";",nl,w(4)))),nl,nl,w(4),M(4,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("shouldDetectWrongNumberOfMatchersWhenStubbing"),P(),_,B(nl,w(8),T(5),".",N(5),P(G(10,"fi","mock"),".",N(6),P(L("1"),", ",L("\"2\""),", ",L("\"3\""))),".",N(7),P(L("null")),";",nl,w(8),tr,_,B(nl,w(12),T(5),".",N(5),P(G(10,"fi","mock"),".",N(6),P(L("1"),", ",N(8),P(L("\"2\"")),", ",L("\"3\""))),".",N(7),P(L("null")),";",nl,w(12),N(9),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(8),_,I("e")))),_,B(),nl,w(4)))),nl,nl,w(4),M(10,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("shouldDetectStupidUseOfMatchersWhenVerifying"),P(),_,B(nl,w(8),G(10,"fi","mock"),".",N(11),P(L("true")),";",nl,w(8),N(8),P(L("\"that's the stupid way\"")),";",nl,w(8),N(8),P(L("\"of using matchers\"")),";",nl,w(8),tr,_,B(nl,w(12),T(5),".",N(12),P(G(10,"fi","mock")),".",N(11),P(L("true")),";",nl,w(12),N(9),P(),";",nl,w(8)),_,ct,_,P(V(1,$(T(8),_,I("e")))),_,B(),nl,w(4)))),nl,nl,w(4),M(13,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("shouldScreamWhenMatchersAreInvalid"),P(),_,B(nl,w(8),G(10,"fi","mock"),".",N(14),P(T(4),".",N(15),P(N(8),P(L("\"asd\"")))),";",nl,w(8),tr,_,B(nl,w(12),G(10,"fi","mock"),".",N(14),P(T(4),".",N(15),P(L("\"jkl\""))),";",nl,w(12),N(9),P(),";",nl,w(8)),_,ct,_,P(V(2,$(T(8),_,I("e")))),_,B(nl,w(12),N(16),P(W(2),", ",N(17),P(L("\"No matchers found for Not(?).\""))),";",nl,w(8)),nl,nl,w(8),tr,_,B(nl,w(12),G(10,"fi","mock"),".",N(14),P(T(4),".",N(18),P(N(8),P(L("\"jkl\"")),", ",L("\"asd\""))),";",nl,w(12),N(9),P(),";",nl,w(8)),_,ct,_,P(V(3,$(T(8),_,I("e")))),_,B(nl,w(12),N(16),P(W(3),", ",N(17),P(L("\"2 matchers expected, 1 recorded.\""))),";",nl,w(8)),nl,nl,w(8),tr,_,B(nl,w(12),G(10,"fi","mock"),".",N(6),P(L("1"),", ",L("\"asd\""),", ",N(8),P(L("\"asd\""))),";",nl,w(12),N(9),P(),";",nl,w(8)),_,ct,_,P(V(4,$(T(8),_,I("e")))),_,B(nl,w(12),N(16),P(W(4),", ",N(17),P(L("\"3 matchers expected, 1 recorded.\""))),";",nl,w(8)),nl,w(4)))),nl))));}});